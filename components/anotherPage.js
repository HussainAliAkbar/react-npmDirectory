import React from 'react';
import {Link} from 'react-router-dom';


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
