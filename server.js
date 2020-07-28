const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3333

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`server running on port ${port}`))