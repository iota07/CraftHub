from django.db import models

# Create your models here.
class NewPost(models.Model):
    title = models.CharField(max_length=70, blank=False, default="")
    postContent = models.CharField(max_length=1000, blank=False, default="")
    published = models.BooleanField(default=False)

    def __str__(self):
        return self.title


