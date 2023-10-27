const express = require('express')
const app = express()
const port = 4000
const path = require('path');

const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => { // arrow function 
    res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:name', (req, res) => { //passinf parma through the url
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/api/books', (req, res) => {
    const data = [ //returning a api baack to our server
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];
    res.status(200).json({
        myBooks: data,
        "message" : "Hello from server" // printing out a message to the server
    });
})

app.get('/test',(req, res)=>{ // sending file data 
    res.sendFile(__dirname +'/index.html');
})

app.get('/name',(req, res)=>{ // sending file data apart of the url 
    res.send("Hello " +req.query.fname+" "+req.query.lname);// very similar to how google works 
})

app.post('/name',(req,res)=>{
    res.send("Hello " +req.body.fname+" "+req.body.lname)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) //listening command
})