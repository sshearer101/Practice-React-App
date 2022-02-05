import React, {useState, useEffect} from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((response) => setPosts(response));
  }, []);


  return (
    <ul className="posts">
      {posts.map((post) => (
        <li className="post" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Posts;