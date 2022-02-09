const connection = require('../config/connection');
const { User, Thought } = require('../models');

const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  await Thought.collection.insertMany(thoughtData);
  await User.collection.insertMany(userData);

  console.info('User and Thought collections have been seeded.')
  process.exit(0);
});
