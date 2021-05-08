import React from 'react';
import PostState from './post/context/PostState'
import NewPost from './post/pages/NewPost';
import Register from './user/pages/Register';

function App() {
  return (
    <div className="App">
      <PostProvider>
        <NewPost/>
      </PostProvider>
      
    </div>
  );
}

export default App;
