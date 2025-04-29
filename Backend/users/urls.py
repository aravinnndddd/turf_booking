from django.urls import path
from . import views
from .views import RegisterView, LoginView, ProfileView, LogoutView, CourtListView, BookingView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('courts/', CourtListView.as_view(), name='court-list'),
    path('booking/', BookingView.as_view(), name='create-booking'),
    path('book/', views.book_court, name='book_court'),
]
