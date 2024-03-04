# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import House
import json

@csrf_exempt
def add_house(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        age = data.get('age')
        url = data.get('url')
        address = data.get('address')
        floor = data.get('floor')
        area = data.get('area')
        
        print(f"add_house {data}")

        # 创建 House 对象并保存到数据库
        new_house = House(age=age, url=url, address=address, floor=floor, area=area)
        new_house.save()

        return JsonResponse({'message': 'House added successfully'}, status=201)

    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=400)

def house_list(request):
    
    houses = House.objects.all()
    print(f"House List {houses}")
    house_list = []
    for house in houses:
        house_data = {
            'age': house.age,
            'url': house.url,
            'address': house.address,
            'floor': house.floor,
            'area': house.area,
        }
        house_list.append(house_data)

    return JsonResponse({'houses': house_list})


@csrf_exempt
def delete_house(request, house_id):
    print(f"delete_house with house id = {house_id}")
    if request.method == 'DELETE':
        try:
            house = House.objects.get(pk=house_id)
            house.delete()
            return JsonResponse({'message': 'House deleted successfully'}, status=200)
        except House.DoesNotExist:
            return JsonResponse({'error': 'House not found'}, status=404)
    else:
        return JsonResponse({'error': 'Only DELETE requests are allowed'}, status=400)