require('./src/config/env');
const app = require('./src/app');
const connectDB = require('./src/config/db');
const PORT = process.env.PORT || 3001;

// Connect to MongoDB then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    });
});