const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true,
    },
    gender: {
        type: String,
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('Clients',clientSchema)