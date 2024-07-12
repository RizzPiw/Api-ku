const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const userFilePath = path.join(__dirname, 'users.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/forgot-password", (req, res) => {
    res.sendFile(__dirname + "/views/forgot-password.html");
});

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user file' });
        }

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        users.push({ username, password });

        fs.writeFile(userFilePath, JSON.stringify(users, null, 2), err => {
            if (err) {
                return res.status(500).json({ message: 'Error writing user file' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user file' });
        }

        let users = JSON.parse(data);
        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    });
});

app.post('/api/forgot-password', (req, res) => {
    const { username, newPassword } = req.body;

    if (!username || !newPassword) {
        return res.status(400).json({ message: 'Username and new password are required' });
    }

    fs.readFile(userFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user file' });
        }

        let users = JSON.parse(data);
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(400).json({ message: 'Username not found' });
        }

        user.password = newPassword;

        fs.writeFile(userFilePath, JSON.stringify(users, null, 2), err => {
            if (err) {
                return res.status(500).json({ message: 'Error writing user file' });
            }
            res.status(200).json({ message: 'Password reset successfully' });
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
