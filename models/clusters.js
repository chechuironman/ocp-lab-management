const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ClusterSchema = new Schema({
    name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});
module.exports = Cluster = mongoose.model("clusters", ClusterSchema)

