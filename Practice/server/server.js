const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(express.json());
app.use(cors());

const db = knex({
    client: 'pg',  //which is postgreSQL
    connection: {
        host: '127.0.0.1', //This computer
        user: 'postgres',
        password: 'secret',
        database: 'test'
    }
});


//return all names in the database
app.get('/',(req,res)=>{
    res.send('Hello World !')
});


//return all names in the database
app.post('/all',(req,res)=>{
    db.select('name').from('users')
    .then(users=>res.json(users))
});

//return 'email & dob' for the 'name' entered
app.post('/getData', (req, res) => {
    console.log(req.body.name);
    db.select('dob', 'name', 'email').from('users')
        .where('name', '=', req.body.name)
        .then(user => {
            if (user.length) {
                res.json(user[0]);
                console.log(user);
            } else {
                res.status(400).json('User does not exist');
                console.log('User doesnt exist')
            }
        })
        .catch(() => res.status(400).json('Unable to fecth !'));
});

//Insert 'name, email & dob' in the database
app.post('/saveData', (req, res) => {
    let { name, email, dob } = req.body;
    db.transaction(trx => {
        trx.insert({
            dob: dob,
            name: name,
            email: email
        }).into('users')
            .returning('*')
            .then(user => {
                res.json(user[0]);
            })
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .catch(err => res.status(400).json('Unable to register'))
});


app.listen(3000, () => {
    console.log('Now Running on 3000');
});