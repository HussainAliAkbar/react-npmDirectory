import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Container, Row, Column} from 'react-grid-system';


class anotherPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <p>yippee</p>
                <Link to="/">
                    <p>click to go home</p>
                </Link>
            </div>
        )
    }
}

module.exports = anotherPage;
