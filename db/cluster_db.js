const config = require('../config/keys');
const Cluster = require('../models/clusters');

class Clusters {

    constructor(connection) {
        // this.projects = projects;
        // this.connection = mongoose.connect(config.mongoURI, { useNewUrlParser: true });
        
    }
 listClusters (req,res) {
    Cluster.find({},(err,clusters)=>{
        console.log(clusters);
        res.send(clusters);
    })
    }
  
}
module.exports = Clusters
// export let courses = new Courses()