import {useState} from "react";
import Post from "./Posts"
const App=()=>{
const [posts,setPosts]=useState([]);



    function addPost()
    {
        setPosts([...posts,{
             name: "harkirat",
            subtitle: "10000 followers",
            time: "2m ago",
            image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
            description: "What to know how to win big? Check out how these folks won $6000 in bounties.",
        }])
    }

return (
    <div>
        <button onClick={addPost}>AddPost</button>
        <div style={{display:"flex",justifyContent:"center"}}>
        <div>
            {/* {posComponents} */}
            {posts.map((post)=> 
    <Post name={post.name}
subtitle={post.subtitle}
time={post.title}
image={post.image}
description={post.description}
    ></Post>)}
        </div>
        </div>
    </div>
)
}
export default App;