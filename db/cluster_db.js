const Cluster = require('../models/clusters');

class Clusters {

    constructor(connection) {
    }
 listClusters (req,res) {
     console.log(req.body);
    Cluster.find({},(err,clusters)=>{
        res.send(clusters);
    })
    }
  
}
module.exports = Clusters