const campusesRouter = require('express').Router();
const Campuses = require('../db/models/Campuses');


campusesRouter.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

module.exports = campusesRouter;
