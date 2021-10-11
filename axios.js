const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then(response => {
      
    console.log(response.data);

    const fs = require("fs");

    fs.appendFile("./axios.txt", response.data,(err,data)=>{
        if(err){
            console.log("file not found");
        }else{
            console.log(data);
        }
    });
  })
  .catch(error=> {
    console.log(error);
  });
