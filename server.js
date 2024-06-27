const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const users = require('./routes/users');

// dotenv.config();

const app = express();

app.use(express.json());

// mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDb has been connected successfully'))
// .catch((err) => console.log('There is an error in connecting to MongoDB: ', err))

mongoose.connect("mongodb+srv://meghanasai2712:3zBf4zCn9lspFQuZ@my-app-developer.jlhzvyl.mongodb.net/?retryWrites=true&w=majority&appName=my-app-developer")
    .then(() => console.log('Database has been connected successfully'))
        .catch((err) => console.log('Failed to connect to Database', err))

// app.use('/api/users', users);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is running on PORT: ', port);
})