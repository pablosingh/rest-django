from rest_framework import serializers
from .models import Task


class Taskserializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # fields = ('id', 'title', 'description', 'done')  # Esto es uno por uno
        fields = '__all__'
