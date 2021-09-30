const express = require('express');
const bodyParser = require('body-parser'); // for parsing the body of the request JSON
const cors = require('cors'); // for allowing cross-origin requests

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})