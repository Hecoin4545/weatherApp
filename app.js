// // now we will see how the asynchronous Works in node js 
// console.log('starting');

const request = require("request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// setTimeout(()=>{
// console.log('middle');
// },3000)

// setTimeout(()=>{
// console.log('Above Middle');
// },0)
// console.log('ending');

// here now we will see how to connect with the http request 




// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

let nameOfplace = process.argv[2];
if(nameOfplace == undefined){
    console.log(`please provide a specific information "City Area"`);
}else{
    geocode(nameOfplace , (error , { logitude,latitude , location})=>{
     
        if(error){
            return console.log(error);
        }
         forecast(logitude, latitude, (error, forecast) => {
             if(error){
                 return console.log(error);
             }else{
                 console.log(location);
                 console.log(forecast);
             }
             
           })
     })
     
     
}
 