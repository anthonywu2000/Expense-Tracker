const TransactionDB = require("../models/Transaction");
// REST API requests calls these and then database....

// @desc GET transactions data
// @route GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactionsAll = await TransactionDB.find({});
        return res.status(200).json({
            success: true,
            data: transactionsAll,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

// @desc ADD transaction
// @route POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        // const {text, amount} = req.body;
        const newTransaction = await TransactionDB.create(req.body);
        return res.status(201).json({
            success: true,
            data: newTransaction,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

// @desc DELETE transaction
// @route DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
    try {
        const delTransaction = await TransactionDB.findById(req.params.id);
        if (!delTransaction) {
            return res.status(404).json({
                success: false,
                message: "Not Found Error",
            })
        }
        await delTransaction.remove(); // call on the individual object that is to be deleted
        return res.status(200).json({
            success: true,
            data: {},
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}