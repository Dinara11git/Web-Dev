from django.urls import path
from .views import index, category_detail

urlpatterns = [
    path('', index, name='index'),
    path('category/<int:category_id>/', category_detail, name='category_detail'),
]