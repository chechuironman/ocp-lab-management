const config = require('../config/keys');
const Course = require('../models/courses');

class Courses {

    constructor(connection) {
        // this.projects = projects;
        // this.connection = mongoose.connect(config.mongoURI, { useNewUrlParser: true });
        
    }
 listCourses (req,res) {
    Course.find({},(err,courses)=>{
        console.log(courses);
        res.send(courses);
    })
    }
    registerCourse (req,res) {
        console.log(req.body);
        var newCourse = new Course(req.body)
        newCourse.save(function (err, course) {
            if (err) return console.error(err);
            console.log(course.courseName + " saved to course collection.");
          });
        return 200;
}   
}
module.exports = Courses
// export let courses = new Courses()