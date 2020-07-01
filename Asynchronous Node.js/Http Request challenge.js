const request=require('request')


const url='http://api.weatherstack.com/current?access_key=66992fce3af6129cbcaec2d2e7b1e98f&query=37.8267,=122.4233&units=f'

request({url:url,json:true},(error,response)=>{
    
    console.log(`${response.body.current.weather_descriptions[0]} .It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} % of rain`)
})

const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFodWxsbGxsbCIsImEiOiJja2MzY29yYXAyY2oyMnB0YjdybmxodTcxIn0.mzrqVuhThHlHeFHW6ltaNA&limit=1'

request({url: geocodeURL,json:true},(error,response)=>{
    const latitude=response.body.features[0].center[1]
    const longitude=response.body.features[0].center[0]
    console.log(latitude,longitude)
})
