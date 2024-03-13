mongo -u root -p admin --authenticationDatabase admin local1 

use account;
db.createCollection("account")
db.account.insertOne({
    user:"22779600",
    pwd:"22779600"
})