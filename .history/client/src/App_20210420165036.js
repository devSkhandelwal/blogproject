import React from 'react';
import PostState from './post/context/PostState'
import NewPost from './post/pages/NewPost';
import Register from './user/pages/Register';

function App() {
  return (
  
      <PostState>
        <NewPost/>
      </PostState>
      

  );
}

export default App;
