var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

// Implement PUT and DELETE routes in the controller;
// ====================================================
app.get('/edit/:name', function(req, res){
    var team = parseInt(req.params.name);
    res.send(req.params.name);  // this checks the req.params.index is sending.    
});

app.put("/:name", function(req, res){
    var name = parseInt(req.params.name);
    console.log(req.body);
  
});

// The Delete function and works for the delete button;
app.delete('/:name', function(req, res){
    var name = parseInt(req.params.name);
    console.log(req.params.name);
    
});

// ======================================================


module.exports = router;
