const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    res.send('Server is runnning')
})
app.get('/users', async (req, res) => {
    res.send('Server is runnning users')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})