import React from 'react';

class PackageSizeSelector extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let size = e.target.value;
        this.props.setSize(size);
    }

    render() {
        return (
            <div>
                <div className="radioWrapper">
                    <input type="radio" id="5" name="radio-category" value="5" onClick={this.handleClick}/>
                    <label htmlFor="5">5</label>
                    <input type="radio" id="10" name="radio-category" value="10" onClick={this.handleClick}/>
                    <label htmlFor="10">10</label>
                    <input type="radio" id="15" name="radio-category" value="15" onClick={this.handleClick}/>
                    <label htmlFor="15">15</label>
                    <input type="radio" id="20" name="radio-category" value="20" onClick={this.handleClick}/>
                    <label htmlFor="20">20</label>
                </div>
            </div>
        )
    }
}

module.exports = PackageSizeSelector;