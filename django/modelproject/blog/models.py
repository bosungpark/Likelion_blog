from django.contrib.auth.models import User
from django.db import models

class Blog(models.Model):
    title= models.CharField(max_length=200)
    writer= models.CharField(max_length=10)
    pub_date= models.DateTimeField()
    body= models.TextField()
    image= models.ImageField(upload_to='blog/', blank=True, null=True)

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

class Comment(models.Model):
    writer= models.CharField(max_length=10)
    content= models.TextField()
    create_date= models.DateTimeField()