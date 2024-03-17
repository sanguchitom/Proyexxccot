from django.db import models
from django.contrib.auth.models import User
# Create your models here.

#product class for functional ecomerch

class Productos(models.Model):
    prenda = models.CharField(max_length=50)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    Creado= models.DateField(auto_now_add=True)
    acutalizado = models.DateField( auto_now=True)
    stock = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.prenda +' | '+str(self.Creado)

#Wallet of User, linkeded with ItemWallet
class Wallet(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    productos = models.ManyToManyField(Productos,through="ItemWallet")
    
    def __str__(self):
        return "carrito de " + self.usuario.username 
#Creator user wallet
class ItemWallet(models.Model):
    user = models.ForeignKey(Wallet, on_delete=models.CASCADE)
    Products = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad = models.DecimalField( max_digits=5, decimal_places=0, default=1)
    estado_de_compra = models.BooleanField(default=False)


    

    