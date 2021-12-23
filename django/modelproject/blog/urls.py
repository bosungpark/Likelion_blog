from django.urls import path
from blog.views import *

app_name= 'blog'

urlpatterns=[
    path('<int:id>', detail, name='detail'),
    path('new/', new, name='new'),
    path('create/', create, name='create'),
    path("update/<int:id>", update, name="update"),
    path('delete/<int:id>', delete, name="delete"),
    path('new_with_django_form/', new, name='new_with_django_form'),
    path('create_with_django_form/', create, name='create_with_django_form'),
    path('comment_create/<int:id>', comment_create, name='comment_create')
]