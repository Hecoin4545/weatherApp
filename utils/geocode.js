const request = require('request')
const geocode = (address , callback)=>{
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hhaC1oZXQiLCJhIjoiY2twbmN1dXZpMm50NTJ3cmlibjBlcW5wNyJ9.j86mX2uiVldQ3SUKoVC6Yw&limit=1';

    request({url , json:true},(error , {body})=>{
        if(error){
            callback('sry unadle to connect',undefined);
        }else if (body.features.length === 0 ){
            callback('sry error',undefined);
        }else{
            callback(undefined ,{
              logitude: body.features[0].center[0],
              latitude: body.features[0].center[1],
              location: body.features[0].place_name
            })
            
        }
    })
}
module.exports = geocode;