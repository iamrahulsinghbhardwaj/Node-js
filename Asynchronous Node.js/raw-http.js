const http=require('http')

const url='http://api.weatherstack.com/current?access_key=66992fce3af6129cbcaec2d2e7b1e98f&query=40,-75&units=f'


const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
