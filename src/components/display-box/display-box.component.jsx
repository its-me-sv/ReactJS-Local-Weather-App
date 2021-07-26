import React from 'react';

import './display-box.styles.css';

const DisplayBox = ({weatherData, toggleCelsius, isCelsius}) => {
    let climate = weatherData.weather[0].main;
    let icon = weatherData.weather[0].icon;
    let celsius = weatherData.main.temp;
    let fahra = (celsius * 1.8) + 32;
    let country = weatherData.sys.country;
    let name = weatherData.name;
    return (
        <div className="display-box-container">
            <h2>{name}, {country}</h2>
            <h2>{isCelsius ? celsius : fahra} <span title="Toggle Unit" onClick={toggleCelsius}>{isCelsius ? "C" : "F"}</span></h2>
            <h2>{climate}</h2>
            <img src={icon} alt="climate icon"/>
        </div>
    );
};

export default DisplayBox;