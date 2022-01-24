require('./modals/db');

const express = require('express')
const path = require('path')
var clients = require('./routes/clientRoutes');
var cors = require('cors')


const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(cors())


app.listen(5000, () => {
    console.log('listning at', 5000)
})

app.use('/users/v1', clients);