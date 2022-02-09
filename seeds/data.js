const ObjectId = require('mongodb').ObjectId;

const userData = [
  {
    "_id": ObjectId("62030f6c64fba167d8adc058"),
    "username": "Johnny",
    "email": "JSilverhand@cyberpunk.com",
    "thoughts": [
      ObjectId("62030f6c64fba167d8adc052"),
      ObjectId("62030f6c64fba167d8adc053")
    ],
    "friends": [
      ObjectId("62030f6c64fba167d8adc05c"),
      ObjectId("62030f6c64fba167d8adc05b")
    ]
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc059"),
    "username": "Thomas",
    "email": "neo@thematrix.com",
    "thoughts": [
      ObjectId("62030f6c64fba167d8adc054")
    ],
    "friends": [
      ObjectId("62030f6c64fba167d8adc05c")
    ]
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc05a"),
    "username": "John",
    "email": "johnwick@example.com",
    "thoughts": [
      ObjectId("62030f6c64fba167d8adc055")
    ],
    "friends": [
      ObjectId("62030f6c64fba167d8adc05c")
    ]
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc05b"),
    "username": "Andrew",
    "email": "andrewbyoo@gmail.com",
    "thoughts": [],
    "friends": [
      ObjectId("62030f6c64fba167d8adc058")
    ]
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc05c"),
    "username": "Keanu",
    "email": "keanureeves@example.com",
    "thoughts": [
      ObjectId("62030f6c64fba167d8adc056")
    ],
    "friends": [
      ObjectId("62030f6c64fba167d8adc058"),
      ObjectId("62030f6c64fba167d8adc059"),
      ObjectId("62030f6c64fba167d8adc05a")
    ]
  }
]

const thoughtData = [
  {
    "_id": ObjectId("62030f6c64fba167d8adc052"),
    "thoughtText": "Why am I inside this person's head?",
    "username": "Johnny",
    "reactions": [
      {
        "reactionBody": "WHO IS IN MY HEAD?!",
        "username": "Andrew",
      }
    ]
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc053"),
    "thoughtText": "Where is my guitar?",
    "username": "Johnny",
    "reactions": []
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc054"),
    "thoughtText": "Guns. LOTS of guns.",
    "username": "Thomas",
    "reactions": [
      {
        "reactionBody": "Now we're talkin'",
        "username": "Johnny"
      },
      {
        "reactionBody": "Hey! That's my line!",
        "username": "John"
      }
    ]
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc055"),
    "thoughtText": "Everything's got a price.",
    "username": "John",
    "reactions": []
  },
  {
    "_id": ObjectId("62030f6c64fba167d8adc056"),
    "thoughtText": "The simple act of paying attention can take you a long way.",
    "username": "Keanu",
    "reactions": []
  }
]

module.exports = { userData, thoughtData }
