import React, {useState} from 'react';
import "./styles/app.css"
import PostList from "./Components/PostList/PostList";
import PostForm from "./Components/PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
      {id: 1, title: 'ReactApp', body: 'Description'},
      {id: 2, title: 'ReactApp', body: 'Description'},
      {id: 3, title: 'ReactApp', body: 'Description'},
      {id: 4, title: 'ReactApp', body: 'Description'}
  ]);

  function createPost(newPost){
      setPosts([...posts, newPost])
  }

  function removePost(post){
      setPosts(posts.filter(p => {
          return p.id !== post.id
      }))
  }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length !== 0 ?
            <PostList remove={removePost} posts = {posts} title={'Список постов'}/>
            : <h1 style={{textAlign : 'center'}}>Посты не найдены</h1>
        }

    </div>
  );
}

export default App;