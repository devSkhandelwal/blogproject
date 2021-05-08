import React from 'react';
import PostState from './post/context/PostState'
import NewPost from './post/pages/NewPost';
import Register from './user/pages/Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
    <NewPost/>
  
      <PostState>
        <Router>
          <Switch>
            <Route path="/new/post" component={NewPost} />
          </Switch>
        </Router>
      </PostState>
      
      </div>
  );
}

export default App;
