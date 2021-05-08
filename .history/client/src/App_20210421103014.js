import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewPost from './post/pages/NewPost';
import Login from './user/pages/Login';
import Register from './user/pages/Register';


function App() {
  return (
    <div>
    <Register/>
    <Login/>
    <NewPost/>
    </div>
  );
}

export default App;
