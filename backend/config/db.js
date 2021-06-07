const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected successfully at ${conn.connection.host}`.yellow.bold);
    } catch (err) {
        console.log(`MongoDB connection unsuccessful: ${err.message}`.red.bold);
        process.exit(1); // exit with failure (app shuts down)
    }
}

module.exports = { connectDB };