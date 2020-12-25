import React from 'react';
import logo from './logo.svg';
import './App.css';
import Splash from './components/splash/splash';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './util/routeUtil';

function App() {
  return (
    <div>
      <Splash/>
    </div>
  );
}

export default App;
