import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Search from './components/Results/Search';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/search" component={Search} />
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </div>
    );
}

export default App;
