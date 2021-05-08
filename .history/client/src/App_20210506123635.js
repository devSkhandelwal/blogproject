import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewPost from './post/pages/NewPost';
import Home from './post/pages/Home';
import PostDeails from './post/pages/PostDetails'
import UpdatePost from './post/pages/UpdatePost';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
import Profile from './user/pages/Profile';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/add/newpost" component={NewPost}/>
        <Route path ="/profile" component={Profile}/>
        <Route path="/details/post/:postId" component={PostDeails}/>
        <Route path="/update/post/:postId" component={UpdatePost}/>
        {/* <Route path="/delete/post/:postId" component={}/> */}
      </Switch>
    </Router>
  );
}

export default App;
