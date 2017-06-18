import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
    }

    wrapper() {
    return (
        <div className="card-wrapper">
            <div className="card card-1">
                <div className="top-part">
                    <h4 className="heading">{this.props.name}</h4>
                    <p className="heading">{this.props.description}</p>
                </div>
                <div className="bottom-part">
                    <a href= {this.props.npm} target="_blank"><button className="btn" type="button"><span>Npm</span></button></a>
                    <a href= {this.props.homePage} target="_blank"><button className="btn" type="button"><span>Homepage</span></button></a>
                    <a href= {this.props.repository} target="_blank"><button className="btn" type="button"><span>Repository</span></button></a>

                </div>
            </div>
        </div>

    )
}
    render() {

        return (
            <div>
                {this.wrapper.bind(this)()}
            </div>
        )
    }
}

module.exports = Card;
//
// <Button className="btn" type="button"><a href= "www.google.com" /><span>Npm</span></Button>
// <Button className="btn" type="button"><a href= "www.google.com" /><span>Homepage</span></Button>
//     <Button className="btn" type="button"><a href= "www.google.com" /><span>Repository</span></Button>