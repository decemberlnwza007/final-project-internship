const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false
}))

app.use('/', userRoutes);
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
})