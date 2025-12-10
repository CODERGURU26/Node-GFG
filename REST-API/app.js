const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = [
    { id: 1, name: 'Amar', email: 'amar@example.com' },
    { id: 2, name: 'Gururaj', email: 'guru@example.com' }
];

// Home page: list users
app.get('/', (req, res) => {
    res.render('users', { users });
});

// Add user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.redirect('/');
});

// Update user
app.post('/users/update/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.map(user =>
        user.id === userId ? { ...user, name: req.body.name, email: req.body.email } : user
    );
    res.redirect('/');
});

// Delete user
app.post('/users/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`App Is Running on http://localhost:${PORT}`);
});
