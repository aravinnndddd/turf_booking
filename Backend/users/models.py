from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.conf import settings

class UserManager(BaseUserManager):
    def create_user(self, email, phone, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not phone:
            raise ValueError('Users must have a phone number')
        if not name:
            raise ValueError('Users must have a name')

        user = self.model(
            email=self.normalize_email(email),
            phone=phone,
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, phone, name, password):
        user = self.create_user(
            email,
            phone=phone,
            name=name,
            password=password,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone', 'name']

    def __str__(self):
        return self.email

class Court(models.Model):
    TYPE_CHOICES = [
        ('cricket', 'Cricket'),
        ('football', 'Football'),
        ('badminton', 'Badminton'),
        ('volleyball', 'Volleyball'),
    ]

    name = models.CharField(max_length=255)
    court_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.court_type} - {self.name}"


class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    court = models.ForeignKey(Court, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    players = models.IntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"Booking for {self.court.name} by {self.user.name} on {self.start_time}"
