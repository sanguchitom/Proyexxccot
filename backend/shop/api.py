from rest_framework import viewsets, permissions
from .models import Wallet, Productos, ItemWallet
from django.contrib.auth.models import User
from .serializers import WalletSerializers, Productosserializers, ItemWalletSerializers, UserSerializers


class WalletViewSet(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = WalletSerializers

class ProductosViewSet(viewsets.ModelViewSet):
    queryset = Productos.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = Productosserializers

class ItemWalletViewSet(viewsets.ModelViewSet):
    queryset = ItemWallet.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ItemWalletSerializers

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = User