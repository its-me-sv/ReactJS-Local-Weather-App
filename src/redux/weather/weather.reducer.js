import WeatherActionTypes from "./weather.types";

const INITIAL_STATE = {
    fetchedData: null,
    error: null,
    isPending: null
};

const weatherReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case WeatherActionTypes.WEATHER_FETCH_PENDING:
            return {...state, ...{isPending: true}};
        case WeatherActionTypes.WEATHER_FETCH_SUCCESS:
            return { ...state, ...{ isPending: false, error: false, fetchedData: action.payload}};
        case WeatherActionTypes.WEATHER_FETCH_FAILED:
            return {...state, ...{isPending: false, error: action.payload}};
        default:
            return state;
    }
};

export default weatherReducer;