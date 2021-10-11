const chalk=require("chalk");

// a:
function getArrReturnSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    console.log(sum);
}

// b:
function getArrReturnSumWithBlueColor(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    console.log(chalk.blue(sum));
}

// c:
function getArrReturnSumWithBoldYellowColor(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    console.log(chalk.red.bold(sum));
}

// d:
function writeToFile(text){
    const file = require("fs");
    file.appendFile("./only text.txt",text,(err)=>{
        if(err){
            console.log("text not loaded");
        }
        else{
            console.log("done");
        }
    })
}

// e:
function getFileNameAndlogAsync(file){
    const fs = require("fs");
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
} 

// f:
function getFileNameLogSync(file){
    let fs =require("fs");
    let context=fs.readFileSync(file,"utf-8")
        console.log(context);
}

// g:
function addTextTOfile(file,context){
    let fs = require("fs");
    fs.appendFile(file,context,(err)=>{
        if(err){
            console.log("text not loaded");
        }
        else{
            console.log("text added to the file");
        }
    })
}


module.exports.returnSum = getArrReturnSum;
module.exports.returnSumBlue = getArrReturnSumWithBlueColor;
module.exports.returnSumYellow = getArrReturnSumWithBoldYellowColor;
module.exports.writeToFile = writeToFile;
module.exports.getFileNameAndlogAsync =getFileNameAndlogAsync;
module.exports.getFileNameLogSync=getFileNameLogSync;
module.exports.addTextTOfile=addTextTOfile;
