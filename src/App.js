import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './containers/Home';
import CountryDetails from './containers/CountryDetails';


import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:id" component={CountryDetails} />
          </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
