const mongoose = require('mongoose')

// const mongooseURI = "mongodb://localhost:27017/iNoteBook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongooseURI='mongodb://localhost:27017/iNoteBook'

const connectToMongo = () => {
    mongoose.connect(mongooseURI, {
        useNewUrlParser: true

    },
    
    () => {
            console.log("Connected to Mongo succesfully.");
    })
}


module.exports = connectToMongo