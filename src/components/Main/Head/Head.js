import React, { Component } from 'react';
import './Head.css';

class Head extends Component {
    render() {
        return (
            <div className="HeadBox">
                <div className="CityBox HeadTextCenter">Sehirler</div>

                <div className="DayBox HeadTextCenter">{this.props.day1}</div>

                <div className="DayBox HeadTextCenter">{this.props.day2}</div>

                <div className="DayBox HeadTextCenter">{this.props.day3}</div>

                <div className="DayBox HeadTextCenter">{this.props.day4}</div>

                <div className="DayBox HeadTextCenter">{this.props.day5}</div>
            </div>
        );
    }
}

export default Head;