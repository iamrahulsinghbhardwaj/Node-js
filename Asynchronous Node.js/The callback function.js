setTimeout(()=>{
    console.log('Two second are up')
},2000)

const names=['Rahul','Jai','yash']

const shortNames=names.filter((name)=>{
    return name.length<=4
})

const geocode=(address,callback)=>{
    setTimeout(()=>{
        const data={
            latitide:0,
            longitude:0
        }
        callback(data)
    },2000)
}

geocode('Pathankot',(data)=>{
    console.log(data)
})

const add=(x,y,callback)=>{
    setTimeout(()=>{
        callback(x+y)
    },2000)
}
add(1,4,(sum)=>{
    console.log(sum)
})
