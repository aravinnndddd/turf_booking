from rest_framework import serializers
from .models import User
from .models import Court
from .models import Booking


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'phone', 'name', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            phone=validated_data['phone'],
            name=validated_data['name'],
            password=validated_data['password'],
        )
        return user

class CourtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Court
        fields = ['id', 'name', 'court_type', 'location']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['user', 'court', 'start_time', 'end_time', 'players', 'price']
