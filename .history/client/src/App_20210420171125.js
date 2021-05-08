import React from 'react';
import PostState from './post/context/PostState'
import NewPost from './post/pages/NewPost';
import Register from './user/pages/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AllPosts from './post/pages/AllPosts';

function App() {
  return (
    <div>
      <PostState>
        <Router>
          <Switch>
          <Route exact path="/" component={AllPosts} />
            <Route path="/new/post" component={NewPost} />
          </Switch>
        </Router>
      </PostState>
      
      </div>
  );
}

export default App;
