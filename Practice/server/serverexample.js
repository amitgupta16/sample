const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//use this to get-send index.html
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    const user = {
        name: 'Amit',
        hobby: 'Web'
    }
    res.send(user)
});

app.post('/profile',(req,res)=>{
    console.log(req.body);
    res.send('updated');
});

app.get('/profile',(req,res)=>{
    res.send('Getting data');
});


app.listen(3000);

//req.body req.querry req.params req.header
