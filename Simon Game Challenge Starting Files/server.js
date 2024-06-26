import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'Simon Game Challenge Starting Files')));

// Route for serving the indexS.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexS.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
