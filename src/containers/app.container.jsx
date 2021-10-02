import React from 'react';
import {connect} from 'react-redux';

import {requestWeatherData} from '../redux/weather/weather.actions';

import './app.styles.css';

import DisplayBox from '../components/display-box/display-box.component';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCelsius: true,
            lat: 0.0,
            long: 0.0
        };
    }

    componentDidMount() {
        function success(position) {
            window.alert(position.coords.latitude, position.coords.longitude);
        }

        function error() {
            console.log('Sorry, no position available.');
        }

        const options = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: Infinity
        };

        navigator.geolocation.watchPosition(success, error, options);
        navigator.geolocation.getCurrentPosition(position => {
            const {onRequestWeatherData} = this.props;
            onRequestWeatherData(
                position.coords.latitude,
                position.coords.longitude
            );
        });
    }

    toggleCelsius = () => {
        this.setState({isCelsius: !this.state.isCelsius});
    }

    render() {
        const {isPending, error, weatherData} = this.props;
        return (
            <div className="container">
                <h1>Local Weather App</h1>
                {
                    isPending===false && error===false
                        ? <DisplayBox 
                            isCelsius={this.state.isCelsius}
                            toggleCelsius={this.toggleCelsius}
                            weatherData={weatherData}
                          />
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = ({weather}) => ({
    weatherData: weather.fetchedData,
    isPending: weather.isPending,
    error: weather.error
});

const mapDispatchToProps = dispatch => ({
    onRequestWeatherData: (lat, lng) => dispatch(requestWeatherData(lat, lng))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);