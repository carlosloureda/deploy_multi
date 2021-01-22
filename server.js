const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send({
        message: "Hello from Server!"
    })
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})