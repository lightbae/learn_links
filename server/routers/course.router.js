var express = require('express');
var router = express.Router();
var Course = require('../models/course.model.js');

router.get('/courses', function(req, res){});
router.get('courses/:id', function(req, res){});
router.post('/courses', function(req, res){
  var course = new Course(req.body);
  course.postDate = new Date();
  course.save(function(err){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
      msg: 'Success! You created a new course.'
    });
  });
});
router.put('/courses/:id', function(req, res){});
router.delete('/courses/:id', function(req,res){});

module.exports = router;