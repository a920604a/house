from django.db import models


class House(models.Model):
    id = models.AutoField(primary_key=True)  # 添加主键 id
    age = models.IntegerField(blank=True, null=True)  # 可以為空
    url = models.URLField(blank=True, null=True)  # 可以為空
    address = models.CharField(max_length=255, blank=True, null=True)  # 可以為空
    currentfloor = models.IntegerField(blank=True, null=True)  # 可以為空
    totalfloor = models.IntegerField(blank=True, null=True)  # 可以為空
    area = models.FloatField(blank=True, null=True)  # 可以為空
    created_at = models.DateTimeField(auto_now_add=True)  # 加入創建時間
    updated_at = models.DateTimeField(auto_now=True)  # 加入更新時間
