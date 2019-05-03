
const router = require('express').Router();
const { Ticket } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const allTickets = await Ticket.findAll();
    res.json(allTickets);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const ticketId = req.params.id;
    const singleTicket = await Ticket.findOne({
      where: {
        id: Number(ticketId)
      }
    });
    res.json(singleTicket); 
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newTicket = await Ticket.create(req.body);
    res.json(newTicket);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', (req, res, next) => {
  Ticket.findById(req.params.id)
    .then(t => t.update(req.body))
    .then(t => res.json(t))
    .catch(next);
});
