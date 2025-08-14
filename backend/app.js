const express = require('express');
const session = require('express-session');
const cors = require('cors');

const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
const workRoutes = require('./routes/workRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', userRoutes);
app.use('/auth', authRoutes);
app.use('/', workRoutes);
app.use("/uploads", express.static("uploads"));

app.use((err, _req, res, _next) => {
  console.error('🔥 Internal Error:', err);
  res.status(500).json({ success:false, error: err?.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
