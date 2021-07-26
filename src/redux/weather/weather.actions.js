import WeatherActionTypes from "./weather.types";

export const requestWeatherData = (lat, lng) => dispatch => {
    dispatch({type: WeatherActionTypes.WEATHER_FETCH_PENDING});
    fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lng}`)
    .then(response => response.json())
    .then(data => dispatch({type: WeatherActionTypes.WEATHER_FETCH_SUCCESS, payload: data}))
    .catch(error => dispatch({type: WeatherActionTypes.WEATHER_FETCH_FAILED, payload: error.message}));
};