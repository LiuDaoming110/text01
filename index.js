fetch('https://api.openweathermap.org/data/2.5/weather?q=hefei&appid=99ad9718eb168011a17d74e0b453c164&lang=zh_cn')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#city-name').textContent = data.name;
        document.querySelector('#weather-description').textContent = data.weather[0].description;
        document.querySelector('#temperature').textContent = data.main.temp;
        document.querySelector('#humidity').textContent = data.main.humidity;
    })
    .catch(error => console.error(error));