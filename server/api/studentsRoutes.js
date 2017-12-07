const studentsRouter = require('express').Router();
const Students = require('../db/models/Students');


studentsRouter.get('/', (req, res, next) => {
  Students.findAll()
    .then(students => res.send(students))
    .catch(next);
});

module.exports = studentsRouter;
