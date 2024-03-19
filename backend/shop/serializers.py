from rest_framework import serializers
from .models import Wallet, Productos, ItemWallet
from django.contrib.auth.models import User

class WalletSerializers(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'

class Productosserializers(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'
        read_only_fields = ('Creado', 'acutalizado')

class ItemWalletSerializers(serializers.ModelSerializer):
    class Meta:
        model = ItemWallet
        fields = '__all__'

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'password', 'email']
        
