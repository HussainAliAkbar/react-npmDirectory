import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer">
                <div id="button">
                </div>
                <div id="container">
                    <div id="cont">
                        <div className="footer_center">
                            <h3>Thank you <a href="https://npms.io/about/"><strong>NPM Search</strong> for providing the API!</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Footer;