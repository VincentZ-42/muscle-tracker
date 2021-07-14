const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();
app.use(express.static('build'));
app.get ('/', (req, res) => res.send('API Runing'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.group(`Server started on port ${PORT}`));