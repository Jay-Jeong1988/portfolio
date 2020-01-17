let mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  bgUrl: {
    type: String,
  },
  photoUrls: {
    type: Array,
  },
  videoUrls: {
    type: Array
  },
  linkToProject: {
    type: String
  },
  githubUrl: {
    type: String
  }
}, {
  timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;