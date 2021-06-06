const express = require("express");
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction} = require('../controllers/transactionController');

router
    .route('/') // this automatically calls the route in the app.use(...)
    .get(getTransactions) // get follows the path and calls the getTransactions
    .post(addTransaction); // post follows the path and calls the addTransaction

router
    .route('/:id') // need identifier to know which to remove from DB
    .delete(deleteTransaction); // delete follows the path and calls the deleteTransaction

module.exports = router; // export this module