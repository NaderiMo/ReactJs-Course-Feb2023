
import * as React from 'react'


// idle, pending, resolved, rejected

function App() {
  const [posts, setPost] = React.useState([])
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response)=>setPost(response)) 
    .then(response => console.log(response))
    .then(posts => console.log(posts))
  },{posts})
  
  const listItems=[];
  if(!posts)
  {
    const listItems = posts.map((post) =><li>{post.title}</li>); 
  }

  
  return (

    <ul>{listItems}</ul> 
     );
}

export default App
