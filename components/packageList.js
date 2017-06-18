import React from 'react';
import Card from './card';

class PackageList extends React.Component {
    constructor() {
        super();
    }


    generatePackageCards() {
        let npmPackages = this.props.packages;
        let packageCards = npmPackages.map((packageInfo, index) => {
            return (
                <Card key={index} name={packageInfo.package.name} description={packageInfo.package.description}
                npm={packageInfo.package.links.npm} homePage={packageInfo.package.links.homepage} repository={packageInfo.package.links.repository}/>
            );
        });

        return (
            <div>{packageCards}</div>
        )
    }

    render() {
        if (!this.props.packages.length) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <div>
                    {this.generatePackageCards.bind(this)()}
                    <button className="btn" type="button" onClick={this.props.loadMorePackages}><span>Load More</span></button>
                </div>
            )
        }
    }
}

module.exports = PackageList;