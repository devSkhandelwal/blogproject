import React, { useEffect } from 'react';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
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
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsAction } from './user/actions/userAction';


function App() {

  const {userInfo}  = useSelector(state => state.login);
  const dispatch = useDispatch()
  const {user,loading,error} = useSelector(state => state.userDetails)

  const {isAdmin} = user

  useEffect(()=>{
    dispatch(userDetailsAction(userInfo.id))
  },[dispatch,userInfo])


  let routes;

  if(userInfo){
    if(isAdmin){
      routes = (
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
          <Redirect to='/'
        </Switch>
      )
    }else{
      routes = (
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
        </Switch>
      )
    }
  }

  return (
    <Router>
      <Header admin={isAdmin}/>
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
