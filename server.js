// import express so we can use easliy use Node as a server.
const express = require("express");
const app = express();
// instantiating a port number to use when sending http requests.
const port = 8000;

// added middelware functions to access and parse through post data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

let userPoints = {
    points = 0
};

const transactions = [];

app.post( "/api/add", (req, res) => {
    transactions.push(req.body)
        .then( () =>{
            console.log(req.body);
            res.json(req.body)
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json(err);
        })
    
});

app.post( "/api/spend", (req, res) => {
    // add amount of points that will be spent to userPoints.
    userPoints += req.body.points;
    // take the amount of points spent and subtract from the transactions array.
    let sortedTransactions = transactions.sort(function(a, b)  {
        return new Date(a.timestamp) - new Date (b.timestamp);
    });
    //loop through the sorted array and push elements into new array until spent points amount
    for ( let i = 0; i > sortedTransactions.length - 1; i++){
        if (userPoints > 0){
        userPoints -= sortedTransactions[i].points;
        }
        if (userPoints < 0) {
        
        }
    }

});



app.listen( port, () => console.log(`Listening on port: ${port}`) );
