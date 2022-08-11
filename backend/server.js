import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config' 
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.json())

const uri = process.env.ATLSA_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose database connection established successfully!")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})