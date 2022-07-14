const express = require('express');
const app = express();
const cors = require('cors');

app.listen(8080, () => {
    console.log('listening on port http://localhost:8080' );
})

app.use(cors());

app.get('/family', (req, res) => {
    res.json({ "members" : ["Babak", "Niloufar", "Saman", "Kian"]});
})