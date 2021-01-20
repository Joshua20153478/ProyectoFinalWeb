const request = require('postman-request');
const reverseGeocode=(coordenada,callback) => 
{
    let urlLatLon = `https://us1.locationiq.com/v1/reverse.php?key=pk.3d0fd167f3523894b101cd2dad36c3b3&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    request(urlLatLon, (error,response,body)=>
    {
        if(error)
        {
            callback('Ocurrio algun error con la busqueda',undefined);
        }
        else
        {
            let data=JSON.parse(body);
            callback(undefined,{
                road: data.address.road,
                neighbourhood:data.address.neighbourhood,
                county: data.address.county,
                state: data.address.state,
                country: data.address.country,
                postcode: data.address.postcode
            })
        }
    });
}
module.exports=reverseGeocode;