import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { AppProvider } from './context/AppContext';

import './App.css';
import Header from './components/Header/Header';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
