from rest_framework.serializers import ModelSerializer
from .models import NewPost
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Account
from django.core.exceptions import ObjectDoesNotExist


class NewPostSerializer(ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = NewPost
        fields = "__all__"

    def get_image(self, obj):
        return obj.full_image_url


class UserSerializer(serializers.ModelSerializer):
    profile_pic = serializers.SerializerMethodField()
    bio = serializers.SerializerMethodField()
    background = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["username", "password", "email", "profile_pic", "bio", "background"]

    def get_profile_pic(self, user):
        try:
            account = Account.objects.get(user=user)
            return account.ProfilePic.url if account.ProfilePic else None
        except ObjectDoesNotExist:
            return None

    def get_bio(self, user):
        try:
            account = Account.objects.get(user=user)
            return account.Bio if account else None
        except ObjectDoesNotExist:
            return None

    def get_background(self, user):
        try:
            account = Account.objects.get(user=user)
            return account.Background.url if account else None
        except ObjectDoesNotExist:
            return None
