
const axios = require('axios');
/*const params = {
  access_key: 'd1dccc79f117190d709398404d3b6158',
  query: 'Colima',
  historical_date_start = '2015-10-21',
  historical_date_end = '2020-01-15',
  language = 'en',
  callback = 'MY_CALLBACK'
}

axios.get('http://api.weatherstack.com/historical', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });

  */
 const request = require('postman-request');
const statusClima=(city,callback) => 
{
    let urlLatLon = `http://api.weatherstack.com/current?access_key=7023a0f0668c1b8df8501a6e6ecbceb8&query=${city}&format=json`;
    request(urlLatLon, (error,response,body)=>
    {
        if(error)
        {
            callback('Hay un error con la busqueda',undefined);
        }
        else
        {
            let data=JSON.parse(body);
            callback(undefined,
            {
                temperature: data.current.temperature
            });
        }
    });
}

module.exports=statusClima;