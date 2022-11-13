const users = require('./users.json').users;
const fs = require('fs');

function randomize(user){
    let gifted = users[Math.floor(Math.random()*11)];
     if(user.household != gifted.household && !(assigned.includes(gifted.name))){
       assigned.push(gifted.name);
    results[user.name] = gifted.name;   
   }
    else{
        randomize(user)
    }
}

let results = [];
let assigned = [];
for (let user of users){
  randomize(user)
}
let resultados = new Object;
Object.assign(resultados, results);
resultados = JSON.stringify(resultados);

fs.writeFile("./results.json", resultados, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 