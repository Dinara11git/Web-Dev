from django.shortcuts import render, get_object_or_404
from .models import Category, Product

def index(request):
    categories = Category.objects.all()
    products = Product.objects.all()
    return render(request, 'index.html', {'categories': categories, 'products': products})

def category_detail(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    products = Product.objects.filter(category=category)
    categories = Category.objects.all()
    return render(request, 'index.html', {'categories': categories, 'products': products, 'current_category': category})