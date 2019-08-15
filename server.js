// can't use the import syntax without implementing something like babble or typescript or something like that. Otherwise we have to use this syntax to bring in modules which is called 'common J.S.' when we use react it actually uses E6 modules which is that import syntax.
const express = require('express');
const connectDB = require('./config/db');

// initializing express into a variable called 'app'
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ message: 'Welcome to the ContactKeeper API...' })
);

// Define Routes - replaces the ES6 or common js imports
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// we may choose to run it on port 5000 during development, but in deployment we the host determines that and so we use process.env.Port, which is an environment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
