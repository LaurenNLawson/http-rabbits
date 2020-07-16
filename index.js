const express = require('express');
const app = express();
var cors = require('cors');
fs = require('fs');
app.use(cors())

const port = process.env.PORT || 8080;
app.listen(port, () => {
    ///console.log('Im on port', port);
});

app.get('/404', (req, res) => {
    res.sendFile('img/404.jpg', { root: '.' });
});
