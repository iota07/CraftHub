from django.shortcuts import render
from rest_framework.response import Response
from .models import NewPost
from .serializers import NewPostSerializer, UserSerializer
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from rest_framework_simplejwt.exceptions import TokenError


# Create your views here.
@api_view(["GET"])
def index(request):
    return Response({"Welcome CraftHub Api!"})


@api_view(["GET"])
def GetAllPosts(request):
    get_posts = NewPost.objects.all()
    serializer = NewPostSerializer(get_posts, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def CreatePost(request):
    if request.method == "POST":
        data = request.data
        serializer = NewPostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"Success": "The post was successfully created!"}, status=201
            )
        else:
            return Response(serializer.errors, status=400)
    else:
        return Response(
            {"Error": "This endpoint only accepts POST requests"}, status=405
        )


@api_view(["DELETE"])
def DeletePost(request):
    post_id = request.data.get("post_id")
    try:
        post = NewPost.objects.get(id=post_id)
        post.delete()
        return Response({"Success": "The post was successfully deleted"}, status=200)
    except NewPost.DoesNotExist:
        return Response({"Error": "The post does not exist"}, status=404)


@api_view(["PUT"])
def UpdatePost(request):
    post_id = request.data.get("post_id")
    get_new_post_content = request.data.get("new_content", "")
    get_new_post_image = request.data.get("new_post_image", "")

    try:
        post = NewPost.objects.get(id=post_id)

        post.postContent = get_new_post_content
        post.image = get_new_post_image

        post.save()
        return Response({"Success": "Post successfully updated"}, status=201)
    except NewPost.DoesNotExist:
        return Response({"Error": "The post does not exist"}, status=404)


@api_view(["GET"])
def GetPostById(request):
    post_id = request.data.get("post_id")
    try:
        post = NewPost.objects.get(id=post_id)
        serializer = NewPostSerializer(post)
        return Response(serializer.data)
    except NewPost.DoesNotExist:
        return Response({"Error": "The post does not exist"}, status=404)


@api_view(["GET"])
def UserSearch(request):
    query = request.GET.get("query", "")

    if query:
        users = User.objects.filter(username__icontains=query)
    else:
        users = User.objects.all()

    serializer = UserSerializer(users, many=True)
    return Response({"users": serializer.data})


@api_view(["POST"])
def register_user(request):
    request.data["password"] = make_password(request.data["password"])
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(["POST"])
@permission_classes([AllowAny])
def login_view(request):
    if request.method == "POST":
        username = request.data.get("username")
        password = request.data.get("password")

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise AuthenticationFailed("Account does not exist")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect Password")

        access_token = AccessToken.for_user(user)
        refresh_token = RefreshToken.for_user(user)

        return Response(
            {
                "access_token": str(access_token),
                "refresh_token": str(refresh_token),
            }
        )


@api_view(["POST"])
def logout_view(request):
    if request.method == "POST":
        try:
            refresh_token = request.data.get("refresh_token")
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
            return Response("Logout Successful", status=status.HTTP_200_OK)
        except TokenError:
            raise AuthenticationFailed("Invalid Token")
