const connection = require('../config/connection');
const { User, Thought } = require('../models');

const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');
const reactionData = require('./thoughtData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});
  await User.deleteMany({});
});
