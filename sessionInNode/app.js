const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const PORT = 3000;

app.use(cookieParser());

app.use(session({
    secret: 'amar',
    saveUninitialized: true,
    resave: true
}));

// set view engine
app.set('view engine', 'ejs');

const user = {
    name: 'Amar',
    Roll_number: 45,
    Address: 'Pune'
};

// Home route
app.get('/', (req, res) => {
    res.render('home', { user: req.session.user });
});

// Login route
app.get('/login', (req, res) => {
    req.session.user = user;
    req.session.save(() => {
        res.redirect('/');
    });
});

// User route
app.get('/user', (req, res) => {
    res.render('user', { user: req.session.user });
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log(`App Is Running On http://localhost:${PORT}`);
});
