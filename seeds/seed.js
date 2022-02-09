const connection = require('../config/connection');
const { User, Thought } = require('../models');

const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');
const reactionData = require('./thoughtData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  await Thought.collection.insertMany(thoughtData);
  await User.collection.insertMany(userData);

  console.info('User and Thought collections have been seeded.')
  process.exit(0);
});
