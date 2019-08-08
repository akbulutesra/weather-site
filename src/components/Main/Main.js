import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Head from './Head/Head';
import Weather from './Weather/Weather';

class Main extends Component {
    render() {
        return (
            <Aux>
                <Head day1="5" day2="6" day3="7" day4="8" day5="9" />
                <Weather
                    cityName="Stockholm"
                    city1Icon="sunny" city1Degree="21"
                    city2Icon="sunny" city2Degree="21"
                    city3Icon="sunny" city3Degree="21"
                    city4Icon="sunny" city4Degree="21"
                    city5Icon="sunny" city5Degree="21" />

                <Weather
                    cityName="Istanbul"
                    city1Icon="sunny" city1Degree="21"
                    city2Icon="sunny" city2Degree="21"
                    city3Icon="sunny" city3Degree="21"
                    city4Icon="sunny" city4Degree="21"
                    city5Icon="sunny" city5Degree="21" />
            </Aux>
        );
    }
}

export default Main;