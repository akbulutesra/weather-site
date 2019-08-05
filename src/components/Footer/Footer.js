import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="FooterBox">
                <div className="InfoBox">
                    <p>Iletisim</p>
                    <p>info@weather.com</p>
                </div>
            </div>
        );
    }
}

export default Footer;