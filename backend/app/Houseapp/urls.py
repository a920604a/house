# Houseapp/urls.py

from django.urls import path
from .views import add_house, house_list, delete_house

urlpatterns = [
    path("add_house/", add_house, name="add_house"),
    path("house_list/", house_list, name="house_list"),
    path(
        "delete_house/<int:house_id>/", delete_house, name="delete_house"
    ),  # 添加删除房屋的路径
]
