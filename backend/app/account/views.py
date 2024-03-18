from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import redis

# 连接到 Redis
r = redis.Redis(host="cache", port=6379, db=0, password="")


@csrf_exempt
def login(request):
    print(f"login {request.method}")
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        isExisted = (
            r.get("username").decode("utf-8") == username
            and r.get("password").decode("utf-8") == password
        )

        print(f"the username {username} is {isExisted}")
        if isExisted:
            return JsonResponse({"status": "success", "message": "Account exists"})
        else:
            return JsonResponse(
                {"status": "error", "message": "Account does not exist"}
            )
