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
            newCourse.save(function (err, course) {
                if (err) return console.error(err);
                console.log(course.courseName + " saved to course collection.");
              });
        })
        // var cluster_ = new ClusterObject();
        // let getCluster=async function(req){
        //     let info= await Cluster.find({id : String(req.body.cluster)},(err,cluster)=>{})
        //     // console.log(info); // contains user object
        //     cluster_.name = info[0].name;
        // }
        // var cluster_ = new ClusterObject();
        // Cluster.find({id : String(req.body.cluster)},(err,cluster)=>{
            
        //     cluster_.name = cluster[0].name;
        //     cluster_.url = cluster[0].url; 
        //     // console.log(cluster_);
        // })
        // var cluster___=getCluster(req);
        // console.log("cluster_");
        // console.log(cluster___);
        // console.log("ESTOY AQUI");
        // var newCourse = new Course(req.body)

        // newCourse.save(function (err, course) {
        //     if (err) return console.error(err);
        //     console.log(course.courseName + " saved to course collection.");
        //   });
        return 200;
}   
}
module.exports = Courses
// export let courses = new Courses()