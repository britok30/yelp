import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Search from './components/Search/Search';
import Page404 from './components/Page404/Page404';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/search" component={Search} />
                <Route exact path="/" component={LandingPage} />
                <Route component={Page404} />
            </Switch>
        </div>
    );
}

export default App;
