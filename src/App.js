import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
