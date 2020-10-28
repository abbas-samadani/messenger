import React, { Component } from 'react';
import Main from './Main/Main';
import { Route } from 'react-router-dom';
import routes from './Routes/routes';
class App extends Component {
    render() {
        return (
            <div className="App">
                {routes.map(route => <Route {...route} />)}
            </div>
        );
    }
}

export default App;