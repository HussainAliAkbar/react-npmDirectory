import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LandingPage from './components/landingPage';
import anotherPage from './components/anotherPage';
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/testRoute" component={anotherPage}/>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);