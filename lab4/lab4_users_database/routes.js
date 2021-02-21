const express = require("express");
const User = require("./model/User");
const usersData = require('./UserData.json')

const app = express();

app.post('/users', (req, res) => {
  let errors = []
  usersData.map(async (user) => {
    const newUser = new User(user)
    let error = newUser.validateSync();
    errors.push({ ...error.errors, user: newUser.id });
    await newUser.save()
    
  })

  let error = "";

  errors.map((msg) => {
    error += `ID: ${msg.user}\n`;

    Object.keys(msg).map((key) => {
      if(msg[key].message !== undefined)
      error += `${msg[key].message}\n`
    });

    error += "\n"
  });

  if (error !== '') {
    res.send(error)
  } else {
    res.send('Data saved.')
  }

});

module.exports = app;