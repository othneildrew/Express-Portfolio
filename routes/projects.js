const createError = require('http-errors');
var express = require('express');
var router = express.Router();

const projectsData = require('../data.json');
const { projects } = projectsData;



/* GET specific project */
router.get('/:id', function(req, res, next) {
  const requestURL = req.path.replace('/', '');

  // Retrieve project where id matches
  const project = projects.filter(project => project.id === requestURL);

  // Throw 404 error if project not found
  if (Object.keys(project).length === 0) {
    next(createError(404));
  } else {


    // Dynamically create base url for project images
    const baseImageURL = `/static/images/projects/${requestURL}/`;

    res.render('project', {
      title: `${project[0].project_name} - Othneil Drew`,
      project: project[0],
      baseImageURL: baseImageURL
    });
  }
});





module.exports = router;
