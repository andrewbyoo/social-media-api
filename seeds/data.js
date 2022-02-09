const ObjectId = require('mongodb').ObjectId;

const userData = [
  {
    "_id": ObjectId("62030f6c64fba167d8adc058"),
    "username": "Johnny",
    "email": "JSilverhand@cyberpunk.com"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc059"),
    "username": "Thomas",
    "email": "neo@thematrix.com"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc05a"),
    "username": "John",
    "email": "johnwick@example.com"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc05b"),
    "username": "Andrew",
    "email": "andrewbyoo@gmail.com"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc05c"),
    "username": "Keanu",
    "email": "keanureeves@example.com"
  }
]

const thoughtData = [
  {
    "_id": ObjectId("62030f6c64fba167d8adc052"),
    "thoughtText": "Why am I inside this person's head?",
    "username": "Johnny"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc053"),
    "thoughtText": "Where is my guitar?",
    "username": "Johnny"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc054"),
    "thoughtText": "Guns. LOTS of guns.",
    "username": "Thomas"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc055"),
    "thoughtText": "Everything's got a price.",
    "username": "John"
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc056"),
    "thoughtText": "The simple act of paying attention can take you a long way.",
    "username": "Keanu"
  }
]

module.exports = { userData, thoughtData }
