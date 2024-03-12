from django.db import models


# Create your models here.
class House(models.Model):
    id = models.AutoField(primary_key=True)  # 添加主键 id
    age = models.IntegerField()
    url = models.URLField()
    address = models.CharField(max_length=255)
    currentfloor = models.IntegerField()
    totalfloor = models.IntegerField()
    area = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)  # 加入創建時間
    updated_at = models.DateTimeField(auto_now=True)  # 加入更新時間
