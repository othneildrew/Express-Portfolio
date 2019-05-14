const express = require('express');
const router = express.Router();

const projectsData = require('../data.json');
const { projects } = projectsData;



/* GET home page */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Othneil Drew - Full Stack JavaScript Developer & Pilot',
    projects: projects
  });
});

/* GET about page */
router.get('/about', function(req, res) {
  res.render('about', {
    title: 'About Othneil Drew'
  });
});




module.exports = router;
