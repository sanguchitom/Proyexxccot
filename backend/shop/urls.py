from . import views
from django.urls import path
from rest_framework import routers
from .api import WalletViewSet, ProductosViewSet, ItemWalletViewSet, UserViewSet
router = routers.DefaultRouter()

router.register('api/carro', WalletViewSet, 'wallet')

router.register('api/Productos', ProductosViewSet, 'Products')

router.register('api/ItemsW',ItemWalletViewSet, 'ItemsWallet')

router.register('api/User?',UserViewSet, 'Userpanel')

urlpatterns =  router.urls