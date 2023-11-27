// // 2dc116c14166719e8d646146d04ebd95 api key
// navigator.geolocation.
let cityName = document.getElementById("city-name")
let countryName = document.getElementById("country-name")
let tempDegree = document.getElementById("temp-degree")
let todayDate = document.getElementById("date")
let dailyWeather = document.getElementById("daily-weather")
navigator.geolocation.getCurrentPosition((res)=>{
    
    // console.log(res)
    let {coords} = res;
    let {latitude} = coords ;
    let {longitude} = coords ;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2dc116c14166719e8d646146d04ebd95`)
.then(data => data.json())
.then(data => {
     // =================================================
    // ===================current data =================
    // =================================================
    let { name , sys ,wind , dt } = data;
    let dateString = JSON.stringify(dt);
    // console.log( dateString )
    cityName.innerHTML = name;
    tempDegree.innerHTML = wind.deg+`<sup>°</sup>` ;
    countryName.innerHTML = sys.country.slice(0,10);
    todayDate.innerHTML = moment.unix(dateString).format("DD MMM YYYY hh:mm a");
    // console.log(data)
}
   
    
    )

.catch(error => console.log(error))
// console.log(latitude,longitude);

// fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5d33d2b97007734519698d56ba222761`)
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=74553251ac9e4e95eaecbe25c901920f&units=metric`)
.then(data2 => data2.json())
.then(data2 =>{
    let {list} = data2;

    list.forEach(v => {
        dailyWeather.innerHTML +=`
        <div class="daily-weather">
                            <div>${moment.unix(v.dt).format("hh:mm a")}</div>
                            <div>
                                <img src="images/cloud.png" alt="">
                            </div>
                            <h3>30<sup>°</sup></h3>
                        </div>` 
        console.log(v)
    });
    console.log(data2)
    console.log(list)
} )

.catch(error => console.log(error) )
})
