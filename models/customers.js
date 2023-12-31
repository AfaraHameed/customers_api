const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    place:{
        require:true,
        type:String
    }
})

module.exports = mongoose.model('Customer',customerSchema)