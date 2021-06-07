const mongoose = require('mongoose');
const { Schema } = mongoose;

// creating a database schema
const transactionSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("transaction", transactionSchema);