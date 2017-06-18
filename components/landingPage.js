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

class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
            packages: [],
            from: 0,
            size: 10
        };
        this.getDataFromSearch = this.getDataFromSearch.bind(this);
        this.renderFooterDivider = this.renderFooterDivider.bind(this);
        this.loadMorePackages = this.loadMorePackages.bind(this);
    }
    getDataFromSearch(query) {
        this.setState({searchQuery: query});
        return getFromServer(query)
            .then((response) => {
            this.setState({packages: response.data.results});
            })
            .catch((err) => {
            console.log('err in landing: ', err);
            })
    }

    renderFooterDivider() {
        debugger;
        if (this.state.packages.length) {
            console.log('inside if');
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