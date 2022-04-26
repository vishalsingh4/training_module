const express = require('express');
const route = express.Router();
const User = require('./userSchema');

route.get('/', async (req, res) => {
    const users = await User.find({});

    res.json(users);
});

module.exports = route;