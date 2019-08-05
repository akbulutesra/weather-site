import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Head from './Head/Head';

class Main extends Component {
    render () {
        return (
            <Aux>
                <Head day1="5" day2="6" day3="7" day4="8" day5="9" />
            </Aux>
        );
    }
}

export default Main;