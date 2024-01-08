from django.db import models


# Create your models here.
class NewPost(models.Model):
    username = models.CharField(max_length=30)
    post = models.TextField(max_length=1000)
