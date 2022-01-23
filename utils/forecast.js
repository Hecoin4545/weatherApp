const request = require('request');

const forecast = (long , lat , callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=f29bb97abc4d167f6d03a75487a530c2&query=' + lat + ',' + long

    request({url, json: true},(error , {body})=>{
        if(error){
            callback('Please Turn On Your Internet',undefined);
        }else if(body.error){
    callback('Please Input Proper Information',undefined);
        }else{
            const data = body.current;
            callback(undefined,{
               Weather:data.weather_descriptions[0],
               theTemperature:data.temperature + '%',
               feelsLike:data.feelslike + '%'
            })
        }
    })
}

module.exports = forecast;