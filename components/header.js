import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="headerImage">
                <a href="https://github.com/HussainAliAkbar/react-npmDirectory"><i className="fa fa-github fa-5x hvr-grow"></i></a>
                <div>
                    <h1 className="headerText">NPM Repository Lookup</h1>
                </div>
            </div>
        )
    }
}

module.exports = Header;
