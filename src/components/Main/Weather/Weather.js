import React, { Component } from 'react';
import WeatherBot from './WeatherBot/WeatherBot';

import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <div className="WeatherBox">
                <div className="WeatherBoxCityName HeadTextCenter">{this.props.cityName}</div>

                <WeatherBot iconName={this.props.city1Icon} degree={this.props.city1Degree} />

                <WeatherBot iconName={this.props.city2Icon} degree={this.props.city2Degree} />

                <WeatherBot iconName={this.props.city3Icon} degree={this.props.city3Degree} />

                <WeatherBot iconName={this.props.city4Icon} degree={this.props.city4Degree} />

                <WeatherBot iconName={this.props.city5Icon} degree={this.props.city5Degree} />
            </div>
        );
    }
}

export default Weather;