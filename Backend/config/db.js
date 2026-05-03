const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            console.error('Error: MONGO_URI is not defined in environment variables');
            process.exit(1);
        }
        
        console.log('Attempting to connect to MongoDB...');
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        // Don't exit process in development, but maybe in production?
        // On Render, exiting will cause a restart loop which is good if it's a transient issue.
        process.exit(1);
    }
};

module.exports = connectDB;

