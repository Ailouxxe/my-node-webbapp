const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for serving pages
app.get('/:filename', (req, res) => {
    const { filename } = req.params;
    
    if (['page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html'].includes(filename)) {
        res.sendFile(path.join(__dirname, 'public', filename));
    } else {
        res.status(404).send('Page not found');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
