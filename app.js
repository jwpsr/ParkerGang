const express = require('express');
const path = require('path');

express ()
    .get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))
    .listen(8080, () => console.log("Server running."));