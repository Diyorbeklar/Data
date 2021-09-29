
const Fs = require("fs/promises");
const Path = require("path");



async function readFile(path) {
    let data = await Fs.readFile(path, "utf-8" , (err, data) => {
        if(err) {

        }

       
    });
    data = await JSON.parse(data)
    return data 

}

readFile(Path.join(__dirname, "data.json")).then((data) => {
  addUser("Diyor",11,data);
  
});

async function addUser(name,age,data) {
    let newUser = {
        name, 
        age,
    };

    let oldUser = data.users.find(e=>(e.name===name, e.age===age));
    
    if(oldUser) {
        console.log("Bu user registratsiya qilingan");
    }else {
        data.users.push(newUser);
        Fs.writeFile(Path.join(__dirname,"data.json"),JSON.stringify(data));
     
    }
}



