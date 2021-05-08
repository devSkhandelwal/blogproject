import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './user/pages/Login';
import Register from './user/pages/Register';


function App() {
  return (
    <Register/>
    <Login/>
  );
}

export default App;
