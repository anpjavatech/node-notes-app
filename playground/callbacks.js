function getGeocode(location, callback){
     setTimeout(()=>{
        callback('Data comes from the callback stack')
     }, 2000)
}

getGeocode('berlin', (data)=>{
    console.log(data)
})

console.log('from main thread')