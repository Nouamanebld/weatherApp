async function api () {
  const location = prompt('enter the location');
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=d5e37c4edf9c487d84691747231606&q=' + location);
    const data = await response.json();
    const weather = {
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      country: data.location.country,
      city: data.location.name
    };
    page(weather);
  } catch (err) {
    alert('invalid location');
    api();
  }
}

function page (weather) {
  const country = document.querySelector('.country');
  country.textContent = weather.country;

  const city = document.querySelector('.city');
  city.textContent = weather.city;

  const celcius = document.querySelector('.celcius');
  celcius.textContent = weather.tempC + '°C';

  const fahrenheight = document.querySelector('.fahrenheight');
  fahrenheight.textContent = weather.tempF + '°F';
}
api();
