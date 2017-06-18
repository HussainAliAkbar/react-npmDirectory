import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            inputField: '',
            previousValue: ''
        };
        this.onChange = this.onChange.bind(this);
}

    onChange(event) {
            this.setState({previousValue: this.state.inputField, inputField: event.target.value});
}

handleClick() {
        //bind methods either by doing this.handleClick.bind(this) in button tag or
        //binding it in the constructor.
        //another method in ES6 is:
        //donateOnClick = () => {
        //this.setState({ inputField: event.target.value});
        //}
    if (this.state.previousValue !== this.state.inputField) {
        this.setState({previousValue: this.state.inputField});
        this.props.sendData(this.state.inputField);
    }

}

    handleKeyPress(e) {


        
        if (e.key === 'Enter' && this.state.previousValue !== this.state.inputField) {
            this.setState({previousValue: this.state.inputField});
            this.props.sendData(this.state.inputField);
        }
    }



    render() {
        return (
            <div className="box">
                <div className="container-4">
                    <input type="search" id="search" placeholder="Search..." onChange={this.onChange} onKeyPress={this.handleKeyPress.bind(this)}/>
                    <button className="icon" onClick={this.handleClick.bind(this)}><i className="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

module.exports = Search;

{/*<input className= "search" type="text" placeHolder="Search.."/>*/}