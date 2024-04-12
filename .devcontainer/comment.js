// Create Webserver

const app = express();
const port = 3000;

// Define route handlers
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

app.get('/about', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page\n');
});

// Create server
const server = http.createServer(app);

// Start server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});