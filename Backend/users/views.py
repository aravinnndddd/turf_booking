from django.shortcuts import render

# Create your views here.
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from .serializers import UserRegisterSerializer, BookingSerializer
from .models import User
from .serializers import UserRegisterSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        user = authenticate(request, email=email, password=password)
        
        if user is not None:
            login(request, user)
            return Response({'message': 'Logged in successfully'})
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            'id': user.id,
            'email': user.email,
            'name': user.name,
            'phone': user.phone,
        })

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'})

from .models import Court
from .serializers import CourtSerializer
from rest_framework import generics

class CourtListView(generics.ListCreateAPIView):
    queryset = Court.objects.all()
    serializer_class = CourtSerializer

from .models import Booking
from .serializers import BookingSerializer
from rest_framework.permissions import IsAuthenticated

class BookingView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.create(user=user)
            return Response({
                'message': 'User created successfully.',
                'token': token.key
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.settings import api_settings

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = Token.objects.get(user=request.user)
        return Response({
            'token': token.key
        })

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def profile(request):
    user = request.user
    return Response({
        'username': user.username,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name
    })

@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def book_court(request):
    if request.method == 'POST':
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
