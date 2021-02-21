const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes.js");

const app = express();

const PORT = 3000
app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

const dbUrl = 'mongodb+srv://CoraD:PDJRx5djGF4PEhfP@cluster0.jrba8.mongodb.net/Lab4?retryWrites=true&w=majority'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Successfully connected to mongodb.")
})
.catch(err => {
    console.log('Could not connect to mongodb.', err)
    process.exit()
})

app.use(router)