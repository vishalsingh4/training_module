var express = require('express');
var cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
var app = express();
var PORT = process.env.PORT || 5000;
var corsConfig = {
    origin: 'http://localhost:5000'
}

app.use(cors(corsConfig)); // enable CORS

app.use(express.json()); // extract body from post request

app.use(express.urlencoded({extended: false})); // x-www-form-urlencoded

var userSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        default: 2,
        min: 1,
        max: 999,
        validate: {
            validator: value => value % 2 === 0,
            message: props=>  `Test msg ${props.value}`
        }
    },
    name: String
})

// All user model will have this method

// userSchema.method.test = function() {
    // console.log(`hi ${this.name}`)
// }

// userSchema.statics.test = function() {

// }

// query run on db queries - User.find().test()
userSchema.query.test = function() {

}

// virtual properties - not added to db but flow through document (This property exists on individual user)

userSchema.virtual('email').get(function() {
    return `${this.id} ${this.name}`
})

var UserModel = mongoose.model('User', userSchema);

app.get('/test', (req, res) => {
   // get - //await UserModel.find();
   //post 
//    const user = await User.create({
//        id: 2,
//        name: "rest"
//    })

//    await user.save();

// query
UserModel.where('id').equals(1).where('id2').gte(2).select('age')
   
    res.json([{
        id: 1,
        name: 'TEST'
    }])
})

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
})