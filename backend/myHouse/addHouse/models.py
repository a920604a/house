# addHouse/models.py

from django.db import models

class House(models.Model):
    age = models.IntegerField()
    url = models.URLField()
    address = models.CharField(max_length=255)
    floor = models.IntegerField()
    area = models.FloatField()

    class Meta:
        app_label = 'addHouse'
