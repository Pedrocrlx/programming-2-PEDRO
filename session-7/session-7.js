/* async function fetchUser(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        if (!response.ok) throw new Error("Failed to fetch");
        return await response.json();
    } catch (error) {
        console.error(error.message);
    }
}
 */

const API_KEY = "14caafc589bee003d3cd9f9a34c436aa"; // Replace with a valid key

async function fetchWeather(city) {
    try {
        /* fs.writeFileSync('output.json', JSON.stringify(data, null, 2)); */
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
        );
        if (!response.ok) throw new Error("Failed to fetch");
        return await response.json();
    } catch (error) {
        console.error(error.message);
    }
}

async function fetchAllWeathers() {
    const CITIES = ["London", "Paris", "Tokyo"];
    const promises = CITIES.map((city) => fetchWeather(city));
    const weather = await Promise.all(promises);
    console.log(weather);
}

fetchAllWeathers();
