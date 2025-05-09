const mongoose = require('mongoose');
const config = require('./index');

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(config.dbUri);
        console.log(`Mongo DB connected ${conn.connection.host}`)
    }catch(error){
        console.error('Mongo DB connection error', error);
        process.exit(1)
    }
}

module.exports = connectDB;