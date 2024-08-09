const express = require('express');
const cors = require('cors');
const app = express();
const stationsData =  require("./db.json");

app.use(cors());

app.get('/api/db',(req, res) =>{
    res.json(stationsData);
});

app.get('/api', (req, res) => {
      res.json({success:true});
    });

const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`Server running on http://192.168.0.12:${PORT}`);
})