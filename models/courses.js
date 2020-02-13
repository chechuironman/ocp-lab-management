const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CourseSchema = new Schema({
    courseName: {
    type: String,
    required: true
  },
  courseID: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  expireDate: {
    type: Date, default: Date.now
  },
  owner: {
    type: String
  },
  clusterName: {
    type: String,
    required: true
  },
  clusterUrl: {
    type: String,
    required: true
  }
});
module.exports = Course = mongoose.model("courses", CourseSchema)

