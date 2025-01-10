
const Apis = {
  path: 'https://api.openweathermap.org/data/2.5/weather?q=',
  key: '5cc13906cb81e8500e9b2d14d528d11b',
};
console.log(Apis);

let searchInput = document.getElementById('searchInput');
 searchInput.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getWeatherApi(searchInput.value);
  }
});

const getWeatherApi = (city) => {
  console.log(city);
  fetch(`${Apis.path}${city}&units=metric&appid=${Apis.key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getWeatherReport(data);
    })

};

const getWeatherReport = (data) => {
  document.getElementById('city').innerHTML = `${data.name}`;
  document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
  document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
  document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} km/h`;
};
