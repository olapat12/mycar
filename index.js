const express = require('express')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 128;
const dotenv = require('dotenv')
const Car = require('./car')
const mongoose = require('mongoose')
const INDEX = '/indexx.html';

dotenv.config();
app.use(cors())
mongoose.connect(process.env.DB_CONNECT, 
    { useNewUrlParser: true },
    ()=> console.log('connected to db'));

   
app.get('/all', async(req, res)=>{

    try {
       const all = await Car.find()
       res.status(200).send(all) 
    } catch (error) {
        console.log(error)
    }
})




app.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
app.listen(PORT, () => console.log(`Listening on ${PORT}`));