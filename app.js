// // 2dc116c14166719e8d646146d04ebd95 api key
// navigator.geolocation.
let cityName = document.getElementById("city-name")
let countryName = document.getElementById("country-name")
let tempDegree = document.getElementById("temp-degree")
let todayDate = document.getElementById("date")
let dailyWeather = document.getElementById("daily-weather")
let tempreature = document.getElementById("temprature")
let humidity = document.getElementById("humidity")
let feelsLike = document.getElementById("feels-like")
let wind = document.getElementById("wind")
let src ;
navigator.geolocation.getCurrentPosition((res) => {

    // console.log(res)
    let { coords } = res;
    let { latitude } = coords;
    let { longitude } = coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=2dc116c14166719e8d646146d04ebd95`)
        .then(data => data.json())
        .then(data => {
            // =================================================
            // ===================current data =================
            // =================================================
            let { name, sys, wind, dt ,main} = data;
            let dateString = JSON.stringify(dt);
            // console.log( dateString )
            cityName.innerHTML = name;
            tempDegree.innerHTML = Math.ceil(main.temp ) + `<sup>°</sup>`;
            countryName.innerHTML = sys.country.slice(0, 10);
            todayDate.innerHTML = moment.unix(dateString).format("DD MMM YYYY hh:mm a");
            console.log(data)
        }


        )

        .catch(error => console.log(error))
    // console.log(latitude,longitude);

    // fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=5d33d2b97007734519698d56ba222761`)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=74553251ac9e4e95eaecbe25c901920f&units=metric`)
        .then(data2 => data2.json())
        .then(data2 => {
            let { list } = data2;

            list.forEach(v => {
             v.weather.forEach(i => {
                    if (i.main === "Clear") {
                        src = "images/clear-sun.png"
                    }
                    else if ( i.main === "Haze"){
                        src = "images/haze.png"
                    }
                    else if ( i.main === "Cloud"){
                        src = "images/cloud.png"
                    }
                    else if ( i.main === "Rain"){
                        src = "images/rain-cloud.png"
                    }
                    //     let imageId = document.getElementById("image");
                    //     console.log(imageId)
                    //     imageId.innerHTML = `<img class="image" src="images/clear.png">`;
                    console.log(i.main)
                })
                dailyWeather.innerHTML += `
                    <div class="daily-weather">
                            <div>${moment.unix(v.dt).format("hh:mm a")}</div>
                            <div id="image">  
                              <img class="image" src="${src}"
                            </div>
                            <h4>${Math.ceil(v.main.temp)}<sup>°</sup></h4>
                        </div>`
                     console.log(v.weather)
                    
            //  let imageId = document.getElementById("image");
            //  imageId.innerHTML += ;
            });
           

            //  console.log(imageId)
            // console.log(data2)
            // console.log(list)
        })

        .catch(error => console.log(error))
})
