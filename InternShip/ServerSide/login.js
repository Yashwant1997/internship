const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 9000;

// MongoDB connection
mongoose.connect('mongodb+srv://yash1997:yash1999@cluster0.23pzjew.mongodb.net/Internship')
.then(() => console.log('DB Connected!'))
.catch(() => console.log('DB error'));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('mabs', userSchema);

// Middleware
app.use(express.json());

app.post("/api/login", async (req, res) => {
    try {
        // Extract username and password from the request body
        const { name, password } = req.body;

        // Check if the username exists
        const existingUser = await User.findOne({ name });
        if (!existingUser) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Compare hashed password with the provided password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // If both username and password are valid, return success response
        res.status(200).json({ message: 'Login successful', user: existingUser });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
