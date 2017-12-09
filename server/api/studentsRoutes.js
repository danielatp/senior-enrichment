const studentsRouter = require('express').Router();
const Students = require('../db/models/Students');


studentsRouter.get('/', (req, res, next) => {
  Students.findAll()
    .then(students => res.send(students))
    .catch(next);
});

studentsRouter.get('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Students.findById(studentId)
    .then(student => res.send(student))
    .catch(next);
});

studentsRouter.post('/', (req, res, next) => {
  Students.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

studentsRouter.put('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Students.findById(studentId)
    .then( student => student.update(req.body))
    .then( student => res.send(student))
    .catch(next);
});

studentsRouter.delete('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Students.findById(studentId)
    .then(student => student.destroy())
    .then( () => res.send()) //res.send('Successfully deleted')
    .catch(next);
});

module.exports = studentsRouter;
