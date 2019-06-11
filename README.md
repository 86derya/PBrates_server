=> GET.allProducts <= https://localhost:8080/products/

=> POST.newProduct <= https://localhost:8080/products/


{"sku": NUMBER###, "name": "###", "description": "###", "price": NUMBER###, "currency": "###", "creatorId": "###", "categories": ["###"] }

=> PUT.productById <= https://localhost:8080/products/5c791d12be262c5a1f75a606

{"price": NUMBER#####, "categories": [ "#####" ] }

=> GET.allUsers <= https://localhost:8080/users/

=> GET.userById <= https://localhost:8080/users/5c77d9e254d7ee65b2a3adb5

=> POST.newUser <= https://localhost:8080/auth/register/
{"firstName": "###", "lastName": "###", "telephone": "###", "nickName": "###", "location": "###", "password": "###", "email": "###" }

=> PUT.userById <= https://localhost:8080/users/5c77d9e254d7ee65b2a3adb5
{"favoriteProducts":"test"}

=> PUT.userById <= https://localhost:8080/users/5c77d9e254d7ee65b2a3adb5 {"favoriteProducts":"test"}

=> POST.newOrder <= https://localhost:8080/orders/
{ "creator": "###", "productsList": [{ "productId": "###", "productType": "###", "itemsCount": NUMBER### }], "deliveryType": "###", "deliveryAdress": "###", "sumToPay": NUMBER###, "status": "###" }

=> POST.authLogin <= https://localhost:8080/auth/login
{
"username_email":"capitan@america",
"password":3010
} || {
"username_email":"Capitan",
"password":3010
}

=> GET.authCurrent <= https://localhost:8080/auth/current

=> GET.orderById <= https://localhost:8080/orders/5c791dbfbe262c5a1f75a60a

=> GET.productById <= https://localhost:8080/products/5c791d12be262c5a1f75a606

=> POST.comment <= https://localhost:8080/comments/
{
"product": "5c791cbdbe262c5a1f75a603",
"author": "5c77d466953f7e6240ef64bc",
"text": "Lorem100",
"mark": 3
}

=> GET.comment <= https://localhost:8080/comments/?productId="5c791cbdbe262c5a1f75a603"


=> GET.productById <= https://localhost:8080/products/5c791d12be262c5a1f75a606


