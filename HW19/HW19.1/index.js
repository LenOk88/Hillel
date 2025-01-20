    const API_KEY = 'b20a6e6550458e0314f0e6e817225589';
    const CITY = 'Kharkov';

    function updateDateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const day = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'long' });

        const year = now.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;

        document.getElementById('date').innerText = formattedDate;
        document.getElementById('time').innerText = `${hours}:${minutes}`;
    }

    async function fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            const temperature = Math.round(data.main.temp);
            const feelsLike = Math.round(data.main.feels_like);
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const windSpeed = Math.round(data.wind.speed * 3.6);

            document.getElementById('temperature').innerText = `${temperature}°C`;
            document.getElementById('feels-like').innerText = `Feels Like: ${feelsLike}°C`;
            document.getElementById('description').innerText = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('pressure').innerText = `Pressure: ${pressure} hPa`;
            document.getElementById('wind').innerText = `Wind: ${windSpeed} km/h`;
        } catch (error) {
            alert(`Failed to load weather data: ${error.message}`);
        }
    }

    fetchWeather();

    document.getElementById('update-btn').addEventListener('click', fetchWeather);
    
    setInterval(updateDateTime, 1000);