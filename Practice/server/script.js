const fs = require('fs');

fs.readFile('./hi.txt', (err,data)=>{
    if (err){
        console.log('Error!')
    }
    console.log(data.toString());
})

//fs.appendfile
//fs.unlink
//fs.write
//fs.readFileSync