const mongoose = require('mongoose');
// const uri = process.env.ATLAS_URI;

module.exports = () => {
    mongoose.connect( "mongodb://localhost/userPoints", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
        
    })
        .then(() => {
            console.log("Established a connection to the database")
            
        })  
        .catch(err => console.log("Something went wrong when connecting to the database", err));

}

const connection = mongoose.connection;
connection.once("open", () => 
console.log("MongoDB connnection established successfully")
);

