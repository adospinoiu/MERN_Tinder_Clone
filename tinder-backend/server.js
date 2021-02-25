import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://controller:dsJWyiswjk3gnXc9@cluster0.njws5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// Middleware


// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("HELLO WORLD")
})

// Listener
app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`)
})