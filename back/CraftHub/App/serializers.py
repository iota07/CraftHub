from rest_framework.serializers import ModelSerializer

from .models import NewPost


class NewPostSerializer(ModelSerializer):
    class Meta:
        model = NewPost
        fields = "__all__"
