const express = require('express')
const router = express.Router()
const ClientModal = require('../modals/client.modal')
const axios = require('axios');


router.get('/getall', async(req,res) => {
    await axios.get('https://gorest.co.in/public-api/users')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
})



module.exports = router