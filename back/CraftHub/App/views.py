from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import NewPost
from .serializers import NewPostSerializer, UserSerializer
from django.contrib.auth.models import User


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
    get_new_title = request.data.get("new_title", "")
    get_new_post_content = request.data.get("new_content", "")
    get_new_post_image = request.data.get("new_post_image", "")

    try:
        post = NewPost.objects.get(id=post_id)

        post.title = get_new_title
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
