# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import House
import json


@csrf_exempt
def add_house(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(f"add_house {data}")

        age = int(data.get("age")) if data.get("age") else -1
        url = data.get("url")
        address = data.get("address")
        currentfloor = int(data.get("currentfloor")) if data.get("currentfloor") else -1
        totalfloor = int(data.get("totalfloor")) if data.get("totalfloor") else -1
        area = float(data.get("area")) if data.get("area") else -1

        # 创建 House 对象并保存到数据库
        new_house = House(
            age=age,
            url=url,
            address=address,
            currentfloor=currentfloor,
            totalfloor=totalfloor,
            area=area,
        )
        new_house.save()
        print(f"new hosue = {new_house}")

        return JsonResponse({"message": "House added successfully"}, status=201)

    else:
        return JsonResponse({"error": "Only POST requests are allowed"}, status=400)


def house_list(request):

    houses = House.objects.all()
    # print(f"House List {houses}")
    house_list = []
    for house in houses[::-1]:
        house_data = {
            "id": house.id,
            "age": house.age,
            "url": house.url,
            "address": house.address,
            "currentfloor": house.currentfloor,
            "totalfloor": house.totalfloor,
            "area": house.area,
            "updated_at": house.updated_at.strftime(
                "%Y-%m-%d %H:%M:%S"
            ),  # 格式化 updated_at 欄位
        }
        house_list.append(house_data)

    return JsonResponse({"houses": house_list})


@csrf_exempt
def delete_house(request, house_id):
    print(f"delete_house with house id = {house_id}")
    if request.method == "DELETE":
        try:
            house = House.objects.get(pk=house_id)
            house.delete()
            return JsonResponse({"message": "House deleted successfully"}, status=200)
        except House.DoesNotExist:
            return JsonResponse({"error": "House not found"}, status=404)
    else:
        return JsonResponse({"error": "Only DELETE requests are allowed"}, status=400)
