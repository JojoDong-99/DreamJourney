import express from 'express';
import * as activitiesDao from '../../db/dao/activities-dao';
import * as tripsDao from "../../db/dao/trips-dao";

// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// RESTful routes here

router.post('/', async (req, res) => {
  const response = await activitiesDao.createActivity(req.body, req.user.sub);
  res.json(response);
});

router.get('/', async (req, res) => {
  res.json(await activitiesDao.retrieveAllActivities(req.user.sub));
});

router.get('/:id', async (req, res) => {
  const { id: tripId } = req.params;
  const trip = await tripsDao.retrieveTrip(tripId);

  if (!trip) {
    res.sendStatus(HTTP_NOT_FOUND);
    return
  }

  if (trip.userSub !== req.user.sub) {
    res.sendStatus(401);
    return
  }

  const activities = await activitiesDao.retrieveActivities(tripId);
  res.json(activities);

});

router.put('/:id', async (req, res) => {
      const {id} = req.params;
      const trip = await tripsDao.retrieveTrip(tripId);

      if (!trip) {
        res.sendStatus(HTTP_NOT_FOUND);
        return
      }

      if (trip.userSub !== req.user.sub) {
        res.sendStatus(401);
        return
      }

      const response = res.json(await activitiesDao.updateActivity(id, req.body));
      res.sendStatus(response ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const response = await activitiesDao.deleteActivity(id);
  res.json(response);
});

export default router;
