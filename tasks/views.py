# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import Taskserializer
from .models import Task

# Create your views here.


class TaskView(viewsets.ModelViewSet):
    serializer_class = Taskserializer
    queryset = Task.objects.all()
