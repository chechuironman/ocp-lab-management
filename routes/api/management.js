// import { Courses } from '../../db/course_db.js';
// import { courses } from '../../db/course_db'
const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
let middleware = require('../../middleware');
const Courses = require('../../db/course_db.js');

var  newCourse = new Courses(); 

router.post("/register_course",  newCourse.registerCourse)
router.get("/list_courses",  newCourse.listCourses)
module.exports = router;