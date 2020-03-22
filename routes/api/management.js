
const express = require("express");
const router = express.Router();

const Courses = require('../../db/course_db.js');
const Clusters = require('../../db/cluster_db.js');

var  newCourse = new Courses(); 
var  newCluster = new Clusters(); 

router.post("/register_course", (req, res) => { newCourse.registerCourse(req); })
router.get("/list_courses",  newCourse.listCourses)
router.get("/list_clusters",  newCluster.listClusters)
module.exports = router;