from django.test import TestCase
import requests
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your tests here.

request = requests.get("http://127.0.0.1:8000")

print(request.json())
