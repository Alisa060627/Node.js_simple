const path = require("path");
const users = [

        {
            "id": 1,
            "name": "Whiskers",
            "surname": "Fluffington",
            "age": 3,
            "icon": "/images/1.jpeg"
        },
        {
            "id": 2,
            "name": "Mittens",
            "surname": "Purrington",
            "age": 7,
            "icon": "/images/2.jpeg"
        },
        {
            "id": 3,
            "name": "Shadow",
            "surname": "Whiskerstein",
            "age": 4,
            "icon": "/images/3.jpeg"
        },
        {
            "id": 4,
            "name": "Smokey",
            "surname": "Furrytail",
            "age": 1,
            "icon": "/images/4.jpg"
        },
        {
            "id": 5,
            "name": "Oliver",
            "surname": "Snugglepaws",
            "age": 11,
            "icon": "/images/5.jpg"
        },
        {
            "id": 6,
            "name": "Luna",
            "surname": "Starshine",
            "age": 2,
            "icon": "/images/6.jpg"
        },
        {
            "id": 7,
            "name": "Simba",
            "surname": "Kingpaws",
            "age": 8,
            "icon": "/images/7.jpeg"
        },
        {
            "id": 8,
            "name": "Tigger",
            "surname": "Stripes",
            "age": 4,
            "icon": "/images/8.jpg"
        },
        {
            "id": 9,
            "name": "Cleo",
            "surname": "Egyptianeyes",
            "age": 14,
            "icon": "/images/9.jpeg"
        },
        {
            "id": 10,
            "name": "Whiskey",
            "surname": "Tumblertail",
            "age": 4,
            "icon": "/images/10.jpeg"
        }


]

function getUsers(){
    return users;
}
function getUser(id){
    const user = users.find(element=>element.id===parseInt(id));
    return user;

}
function newUser(name,surname,age,icon){

        const user = {
            id: users.length + 1,
            name: name,
            surname: surname,
            age: age,
            icon: icon,
        };
        users.push(user);
        console.log(users);
}


function editUser(name,surname,age,id,icon){
    const user = users.find(element=>element.id===parseInt(id));
    if(icon!=undefined){
        user.name=name;
        user.surname=surname;
        user.age=age;
        user.icon=icon;

    }else{
        user.name=name;
        user.surname=surname;
        user.age=age;
        user.icon=user.icon;
    }

}
function deleteUser(id){
    const user = users.find(element=>element.id===parseInt(id));
    if(typeof user!="undefined"){
        users.splice(users.indexOf(user),1);
    }else{
        return user;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id>id){
            users[i].id=users[i].id-1;
        }
    }
    console.log(users);
}
module.exports = {getUsers, newUser,getUser,editUser,deleteUser}