const config = require('../config/keys');
const Course = require('../models/courses');
const Cluster = require('../models/clusters');
class ClusterObject {
    constructor() {
        
        this._name= '';
        this._url= '';
    }
    set name(name) {
        this._name = name;
      }
     get name() {
        return this._name;
      }
      set url(url) {
        this._url = url;
      }
      get url() {
        return this._url;
      }

}
class Courses {
    
    constructor(connection) {
        
    }
 listCourses (req,res) {
    Course.find({},(err,courses)=>{
        console.log(courses);
        res.send(courses);
    })
    }
    registerCourse (req,res) {
        Cluster.find({id : String(req.body.cluster)},(err,cluster)=>{
            var newCourse = new Course(req.body)
            newCourse.clusterName = cluster[0].name;
            newCourse.clusterUrl = cluster[0].url;
            newCourse.id = newCourse.courseID;
            console.log("COURSE");
            console.log(newCourse);
            newCourse.save(function (err, course) {
                if (err) return console.error(err);
                console.log(course.courseName + " saved to course collection.");
              });
        })
        return 200;
}   
}
module.exports = Courses
// export let courses = new Courses()