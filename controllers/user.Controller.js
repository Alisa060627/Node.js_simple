const userModel = require('../models/user.Model');
const path = require('path');

function getUsers(req,res,next){
    const users = userModel.getUsers();
    res.render('Show.users.ejs',{users:users})
}
function getUser(req,res,next){
    const user = userModel.getUser(req.params.id);
    if (typeof user == "undefined") {
        res.status(404).send('User with id ' + req.params.id + ' does not exist');
    }
    else {
    res.render('Show.user.ejs',{user})}
}
function showCreateUser(req,res,next){
    res.render('Create.user.ejs')
}

function createUser(req,res,next){
    if (req.file != undefined && req.body.name != "" && req.body.surname != "" && req.body.age != "")
    {path1 = req.file.path;
        list1 = path1.split('\\');
        path2 = '/'+list1[1] + '/' + list1[2];
        userModel.newUser(req.body.name, req.body.surname, req.body.age, path2);
        console.log(req.file.path);
        res.redirect('/users');
    }
    else{
        res.status(400).send('Please fill all the fields');
    }


}
function showEditUser(req,res,next){
    const user = userModel.getUser(req.params.id);
    console.log(user);
    if (typeof user == "undefined") {
        res.status(404).send('User with id ' + req.params.id + ' does not exist');
    }else{
        res.render('Edit.user.ejs',{user})
    }
}

function editUser(req,res,next){
console.log(req.body);
if (req.file != undefined) {
    path1 = req.file.path;
    list1 = path1.split('\\');
    path2 = '/'+list1[1] + '/' + list1[2];
    userModel.editUser(req.body.name, req.body.surname, req.body.age,req.params.id, path2);}
else{
    userModel.editUser(req.body.name, req.body.surname, req.body.age,req.params.id, undefined);
}

    res.redirect('/users');
}

function deleteUser(req,res,next){
    const user = userModel.getUser(req.params.id);
    if (!user) {
        res.status(404).send('User not found');
    } else {
        // If user exists, render the 'Deleted.ejs' template and delete the user
        res.render('Deleted.ejs', { user });
        userModel.deleteUser(req.params.id);
    }

}

const multer = require('multer');
const math = require('math')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 100) + path.extname(file.originalname))
    }
});
const upload = multer({storage: storage});

module.exports ={
    getUsers,
    createUser,
    showCreateUser,
    editUser,
    deleteUser,
    showEditUser,
    upload,
    getUser
}