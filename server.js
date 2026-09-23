import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from 'express';
const app = express();
/**
 * Configure Express middleware
 */
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
const name = process.env.NAME; // <-- NEW
app.get('/', (req, res) => {
    res.send(`Hello, ${JC}!`); // <-- UPDATED
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
app.get('/new-route', (req, res) => {
    res.send('This is a new route!');
});
