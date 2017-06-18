import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Column} from 'react-grid-system';
import {Link} from 'react-router-dom';
import Search from './search';
import getFromServer from '../helpers/apiHelper';
import PackageList from './packageList';
import Divider from './divider';
import Header from './header';
import Footer from './footer';
import PackageSizeSelector from './packageSizeSelector';

class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            packages: [],
            from: 0,
            size: 5
        };
        this.getDataFromSearch = this.getDataFromSearch.bind(this);
        this.renderFooterDivider = this.renderFooterDivider.bind(this);
        this.loadMorePackages = this.loadMorePackages.bind(this);
        this.setSize = this.setSize.bind(this);
    }
    getDataFromSearch(query) {
        this.setState({searchQuery: query, from: 0});
        return getFromServer(query, this.state.from, this.state.size)
            .then((response) => {
            let newFrom = this.state.from + this.state.size;
            this.setState({packages: response.data.results, from: newFrom});
            })
            .catch((err) => {
            console.log('err in landing: ', err);
            })
    }

    renderFooterDivider() {
        if (this.state.packages.length) {
            return (
                <Divider/>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    loadMorePackages() {
        return getFromServer(this.state.searchQuery, this.state.from, this.state.size)
            .then((response) => {
                let newPackages = response.data.results;
                let oldPackages = this.state.packages;
                let combinedPackages = oldPackages.concat(newPackages);
                let newFrom = this.state.from + this.state.size;
                this.setState({packages: combinedPackages, from: newFrom});
            })
            .catch((err) => {
                console.log('err in landing: ', err);
            })
    }

    setSize(size) {
        size = +size;
        this.setState({size: size, from: 0, packages: []});
        if (this.state.searchQuery !== '') {
            return getFromServer(this.state.searchQuery, 0, size)
                .then((response) => {
                    let newPackages = response.data.results;
                    let oldPackages = this.state.packages;
                    let combinedPackages = oldPackages.concat(newPackages);
                    let newFrom = this.state.from + this.state.size;
                    this.setState({packages: combinedPackages, from: newFrom});
                })
                .catch((err) => {
                    console.log('err in landing: ', err);
                })
        }
    }


    render() {
        return (
            <div className="landing-page">
                    <Header/>
                <Row>
                    <Search sendData={this.getDataFromSearch}/>
                </Row>
                <Row>
                    <Divider/>
                </Row>
                <Row>
                    <PackageSizeSelector setSize={this.setSize}/>
                </Row>
                <Row>
                    <Divider/>
                </Row>
                <Row>
                    <PackageList packages={this.state.packages} loadMorePackages={this.loadMorePackages}/>
                </Row>
                {this.renderFooterDivider()}
                <Row>
                    <Footer/>
                </Row>
            </div>
        )
    }
}

module.exports = LandingPage;


{/*<Row>*/}
    {/*<Link to="/testRoute">*/}
        {/*<p>click to go to another page</p>*/}
    {/*</Link>*/}
{/*</Row>*/}