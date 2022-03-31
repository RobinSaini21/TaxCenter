const express = require('express');
const router = express.Router();
const Salary = require('../16Documents/Salary');
const Interest = require('../16Documents/Interest');
const HpInterest = require('../16Documents/HpInterest');
const Register = require('../RegisterUpandLogin/Register');
const Login = require('../RegisterUpandLogin/Login');
const Google = require('../SocialLogin/GoogleLogin');
const BasicDetailForm = require('../Basicdetail/Basicdetails');
const files = require('../16Documents/16files');
const form16 = require('../16Documents/16files')
const deduction = require('../Controller/DeductionController')
const income = require('../Controller/IncomeController');
const regime = require('../Controller/RegimeController')


router.use(income);
router.use(Salary);
router.use(Interest);
router.use(HpInterest);
router.use(Register);
router.use(regime)
router.use(Login);
router.use(Google);
router.use(BasicDetailForm);
router.use(files)
router.use(form16)
router.use(deduction)

module.exports = router