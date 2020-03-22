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
          res.send(courses);
      })
      }
  registerCourse (req,res) {
      Cluster.find({id : String(req.body.cluster)},(err,cluster)=>{
          var newCourse = new Course(req.body)
          newCourse.clusterName = cluster[0].name;
          newCourse.clusterUrl = cluster[0].url;
          newCourse.id = newCourse.courseID;
          newCourse.save(function (err, course) {
              if (err) return console.error(err);
            });
      })
      return 200;
}   
}
module.exports = Courses