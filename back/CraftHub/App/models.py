from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class NewPost(models.Model):
    title = models.CharField(max_length=70, blank=False, default="")
    postContent = models.CharField(max_length=1000, blank=False, default="")
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    avatar = models.ImageField(default="default.jpg", upload_to="profile_images")
    bio = models.TextField(max_length=200, blank=False, default="")

    def __str__(self):
        return self.user.username
