'use strict';
const apiRouter = require('express').Router();
// const db = require('../db');
const studentsRouter = require('./studentsRoutes');
const campusesRouter = require('./campusesRoutes');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))


apiRouter.use('/students', studentsRouter);
apiRouter.use('/campuses', campusesRouter);


module.exports = apiRouter;
