import React from 'react';
import PostState from './post/context/PostState'
import NewPost from './post/pages/NewPost';
import Register from './user/pages/Register';

function App() {
  return (
    <div className="App">
      <PostState>
        <NewPost/>
      </PostState>
      
    </div>
  );
}

export default App;
