import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World! This is a simple Express server.');
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});