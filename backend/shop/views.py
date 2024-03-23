from django.shortcuts import render
from .models import Productos
# Create your views here.

def hom(request):
    a = Productos.objects.all()
    return render(request, 'home.html', {
        "y" : a
    })