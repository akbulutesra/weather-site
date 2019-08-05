import React from 'react';

import Aux from '../../hoc/Aux';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
    render() {
        return (
            <Aux>
                <Header />
                <Main />
                <Footer />
            </Aux>
        );
    }
}

export default Layout;