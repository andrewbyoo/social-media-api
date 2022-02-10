# social-media-api
[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
## Description
This is the backend api of a social media app. Built with Express, Momentjs, MongoDB, and Mongoosejs.

## User Story
```
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.
```

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- To get the app on your local machine:
  1. Click on the code button on the repo.
  2. Copy the HTTPS or SSH link.
  3. Run the command `git clone` with the copied HTTPS or SSH link.
- To get the app prepared to run, in the terminal, run the command `npm i`.
- If you would like seed data for testing, run the command `npm run seed`.

## Usage
The visual shows the app running on a local server and all the routes that were displayed in the demo video.

![Social Media API visual](./assets/social-media-api-gif.gif)

Please click [here](https://youtu.be/vE4xqyntO1w) for a video demo.

## License
This application is covered under the MIT license.

## Features
- Find all users, find by user id, add user, update user, and delete user
- Updating a user will also update the thoughts associated with the user
- All thoughts of a deleted user will be removed
- Deleted users will be removed from other user's friend lists
- Add friend and delete friend
- Adding or deleting a friend will also add or delete the user to or from the other user's friends list
- Find all thoughts, find by thought id, add thought, and delete thought
- Add reaction and delete reaction

## Tests
As shown in the video demo, the commands `npm run seed` and `npm start` were run to start the app.

Once the server has started on a local server, each api request was performs as shown in the video demo.

## Questions
To view more of my projects, you can visit my GitHub page at [andrewbyoo](https://github.com/andrewbyoo).

If you have questions, email me at [andrewbyoo@gmail.com](mailto:andrewbyoo@gmail.com).
