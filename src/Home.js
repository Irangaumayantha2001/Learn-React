// 1. we want to use useState we first import useState from react



import { useState } from "react";

const Home = () => {

    //use state
  const [blogs,setblogs] =useState([
    {title:"my new website " , body: "lorem ipsum..." ,author : "mario" , id:1 },
    {title:"Welcome party " , body: "lorem ipsum..." ,author : "mario" , id:2 },
    {title:"Web dev top tips " , body: "lorem ipsum..." ,author : "mario" , id:3 }
  ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h2>{blog.author}</h2>
                </div>
            ))}
        </div>
     );
}

export default Home;