/*server creation*/
const express = require('express');
const port =3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));
const homeRouter = require('./routes/home');
app.use('', homeRouter);
const userRouter = require('./routes/users');
app.use('/users', userRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})