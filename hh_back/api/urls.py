from django.urls import path
from . import views

urlpatterns = [
    path('api/companies/', views.company_list),
    path('api/companies/<int:id>/', views.company_detail),
    path('api/companies/<int:id>/vacancies/', views.company_vacancies),
    path('api/vacancies/', views.vacancy_list),
    path('api/vacancies/<int:id>/', views.vacancy_detail),
    path('api/vacancies/top_ten/', views.top_ten_vacancies),
]


