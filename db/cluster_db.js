const Cluster = require('../models/clusters');

class Clusters {

    constructor(connection) {
    }
 listClusters (req,res) {
    Cluster.find({},(err,clusters)=>{
        res.send(clusters);
    })
    }
  
}
module.exports = Clusters