let gifted = "";


function sendData(){
    const formData = {
        name: (document.getElementById('name').value).toUpperCase(),
        pass: document.getElementById('password').value,
    }
    checkPass(formData);
}
function revealName(user){
    const resultPlace = document.getElementById('result');
    fetch('./results.json')   
    .then((response) => response.json())
    .then((json) =>  resultPlace.innerHTML = ` <h2 class="display-3 mb-3" style="color:red; text-align: center">TE TOCA REGALARLE A ${json[user]}</h2>`);    
}

function checkPass(formData){
    fetch('./users.json')   
    .then((response) => response.json())
    .then((json) => process(json, formData));
}

function process(json, formData){
    const users = json.users;
    for (let user of users){
       if(user.name == formData.name && user.pass == formData.pass){
           return revealName(user.name);
        }
    }
    alert("Contraseña incorrecta!");
}

