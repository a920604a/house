# addHouse/models.py

from django.db import models

class House(models.Model):
    age = models.IntegerField()
    url = models.URLField()
    address = models.CharField(max_length=255)
    floor = models.IntegerField()
    area = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)  # 加入創建時間
    updated_at = models.DateTimeField(auto_now=True)      # 加入更新時間
    

    # class Meta:
    #     app_label = 'addHouse'
