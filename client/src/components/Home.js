import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>Home test</p>
            </div>
        );
    }
}

Home.propTypes = {

}

export default Home;