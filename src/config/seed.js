require('dotenv').config();
const mongoose = require('mongoose');
const config = require('./index');
const User = require('../models/userModel'); 
const Task = require('../models/taskModel'); 

async function seed() {
      try {
  await mongoose.connect(config.dbUri);

  await User.deleteMany();
  await Task.deleteMany();
  await User.create([
    { name: 'John', email: 'john@example.com', password: "test1234" },
    { name: 'Bob', email: 'bob@example.com', password: "test1234"},
  ]);

    console.log('Database seeded!');
    }catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seed()