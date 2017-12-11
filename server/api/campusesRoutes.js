const campusesRouter = require('express').Router();
const Campuses = require('../db/models/Campuses');


campusesRouter.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

campusesRouter.get('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campuses.findById(campusId)
    .then(campus => {
      return res.send(campus)})
    .catch(next)
}),

campusesRouter.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
});

campusesRouter.put('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campuses.findById(campusId)
    .then( campus => campus.update(req.body))
    .then( campus => res.send(campus))
    .catch(next)
});

campusesRouter.delete('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campuses.findById(campusId)
    .then(campus => campus.destroy())
    .then( () => res.send())
    .catch(next)
})

module.exports = campusesRouter;
