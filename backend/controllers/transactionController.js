// REST API requests calls these and then database....

// @desc GET transactions data
// @route /api/v1/transactions
exports.getTransactions = (req, res, next) => {
    res.send("GET transactions");
}

// @desc ADD transaction
// @route /api/v1/transactions
exports.addTransaction = (req, res, next) => {
    res.send("POST transaction");
}

// @desc DELETE transaction
// @route /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE transaction");
}