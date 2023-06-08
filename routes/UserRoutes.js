const express = require('express');
const jwt = require("jsonwebtoken")
const router = require('express').Router();
const cors = require('cors');
router.use(cors( { origin: '*' , } ));
const {login, findEmail, updatePassword} = require('../Controllers/LoginController');
const bodyParser = require('body-parser')

router.use(bodyParser.json());
router.use(cors( { origin: 'http://localhost:3000',} ));
router.use(express.urlencoded({extended: false}));
const {signup} = require('../Controllers/SignupController');



router.post('/signup' , signup);

router.post('/login' , login);



module.exports = router;