// 在MongoDB啟動時執行的初始化腳本
// 切換到account數據庫
db = db.getSiblingDB('account');
print('[Entrypoint] 切換到account數據庫');


// 創建account集合並插入一條記錄
db.account.insertOne({
    username: '22779600',
    password: '22779600'
});

print('[Entrypoint] 創建account集合並插入一條記錄');
