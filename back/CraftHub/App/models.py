from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.
class NewPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=70, blank=False, default="")
    postContent = models.CharField(max_length=1000, blank=False, default="")
    image = models.ImageField(upload_to="post_images")
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ProfilePic = models.ImageField(upload_to="profile_images")
    Bio = models.CharField(max_length=100, blank=False, default="")
    Background = models.ImageField(upload_to="bg_images", default="")

    def __str__(self):
        return self.user.username
