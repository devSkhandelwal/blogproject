import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewPost from './post/pages/NewPost';
import Home from './post/pages/Home';
import PostDeails from './post/pages/PostDetails'
import UpdatePost from './post/pages/UpdatePost';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
import Profile from './user/pages/Profile';
import AllUsers from './user/pages/AllUsers';
import UserDetails from './user/pages/UserDetails';
import Header from './shared/Navigation/Header';
import { useSelector } from 'react-redux';


function App() {

  const {userInfo}  = useSelector(state => state.login);

  const 

  const details = useSelector(state => state.UserDetails)

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/add/newpost" component={NewPost}/>
        <Route path ="/user/profile" component={Profile}/>
        <Route path="/details/post/:postId" component={PostDeails}/>
        <Route path="/update/post/:postId" component={UpdatePost}/>
        <Route path="/user/list" component={AllUsers}/>
        <Route path="/user/:userId" component={UserDetails}/>
        {/* <Route path="/delete/post/:postId" component={}/> */}
      </Switch>
    </Router>
  );
}

export default App;
