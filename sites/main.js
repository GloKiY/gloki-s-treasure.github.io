var vm = new Vue({
    el:"#app",
    data:{
        city:'重庆',
        weatherList:[ ]
    },
    methods:{
        getWeather:function () {
            //console.log("success")
            //console.log(this.city)
            //调用接口
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
                .then( res => {
                    this.weatherList = res.data.data.forecast
                    console.log(this.weatherList)
                },err => {
                    console.log(err)
                })
                .catch(function (err) {

                })
        },
        setCity:function (city) {
                this.city = city
                this.getWeather()
        }
    }
})