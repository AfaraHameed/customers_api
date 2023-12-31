const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const customersRoutes = require('./routes/customers')
const productRoutes = require('./routes/products')

const PORT = process.env.PORT || 3000
const DB_CONN_STRING = process.env.DATABASE_URL

mongoose.connect(DB_CONN_STRING)
const database = mongoose.connection;
database.on('error',(error)=>{
console.log("DB error",error);
})

database.once('connected',()=>{
    console.log("Database connected");
})

app.use(express.json())

// routes middleware
app.use('/api/customers',customersRoutes)
app.use('/api/products',productRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
