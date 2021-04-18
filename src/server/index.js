const express = require('express')
const cors = require('cors')

import MyODataServer from "./server";




const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})



app.use('/odata', MyODataServer.create());

app.listen(5000, () => console.log(`Server running at port 5000`))