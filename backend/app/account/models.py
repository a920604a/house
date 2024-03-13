from djongo import models


class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username

    class Meta:
        # 將 User 模型連接到 mongodb 的 account 集合
        db_table = "account"
        # 設置為使用 mongodb 連接
        app_label = "mongodb"
