const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// all unmatched routes (* could be /create etc)
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('server is up!');
});