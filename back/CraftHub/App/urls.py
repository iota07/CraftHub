from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index),
    # Post CRUD
    path("get-all-posts/", views.GetAllPosts),
    path("create-new-post/", views.CreatePost),
    path("delete-post/", views.DeletePost),
    path("get-post/", views.GetPostById),
    path("update-post/", views.UpdatePost),
    # Authentication
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
