from .models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def login(request):
    print(f"login {request.method}")
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        print(f"login {username} and {password}")
        # isExisted = User.objects.get(username=username, password=password)
        # print(f"the username {username} is {isExisted}")
        # if isExisted:
        #     return JsonResponse({"status": "success", "message": "Account exists"})
        # else:
        #     return JsonResponse(
        #         {"status": "error", "message": "Account does not exist"}
        #     )
        return JsonResponse({"status": "success", "message": "Account exists"})
    else:
        return JsonResponse({"error": "Only POST requests are allowed"}, status=400)
