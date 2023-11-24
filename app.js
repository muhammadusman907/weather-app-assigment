// // 2dc116c14166719e8d646146d04ebd95 api key
// navigator.geolocation.


navigator.geolocation.getCurrentPosition((res)=>{
    
    console.log(res)
    let {coords} = res;
    let {latitude} = coords ;
    let {longitude} = coords ;


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2dc116c14166719e8d646146d04ebd95`)
.then(data => data.json())
.then(data => console.log(data))
.catch(error => console.log(error))
console.log(latitude,longitude);

// fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5d33d2b97007734519698d56ba222761`)

// // .then(data2 => data2.json())
// .then(data2 => console.log(data2))

})