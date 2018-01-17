const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080

express ()
    .get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));