

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 9000;

const Schema=mongoose.Schema;
// MongoDB connection
mongoose.connect('mongodb+srv://yash1997:yash1999@cluster0.23pzjew.mongodb.net/Internship')
  .then(() => console.log('DB Connected!'))
  .catch(() => console.log('DB error'));

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create mongoose model
const userModel = mongoose.model('mabs', userSchema);

// Middleware
app.use(express.json());
app.use(cors());

// // GET endpoint to select all users
// app.get("/api/getUsers", async (req, res) => {
//     try {
//         const users = await userModel.find();
//         res.status(200).json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

//Post api
app.post("/api/register", async (req, res) => {
    try {
        // Extract user data from the request body
        const { username, dateOfBirth, email, password } = req.body;

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Create a new user document
        const newUser = new userModel({ username, dateOfBirth, email, password });
        await newUser.save();

        // Return success response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
