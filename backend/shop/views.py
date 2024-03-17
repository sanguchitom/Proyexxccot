from django.shortcuts import render
# Create your views here.

def hom(request):
    return render(request, 'home.html')