const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(cors());

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
