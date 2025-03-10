const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/', async (req, res) => {
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    res.json(await controller.getAllCustomers(pageSize, page));
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getCustomer(req.params.id));
});

router.get('/data/customers/:email', (req, res) => {
    const paramEmail = req.params.email;
    res.json(customers.find(customer => customer._email == paramEmail));
});

module.exports = router;