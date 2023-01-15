
import BlogList from "./BlogList";
import { useState } from "react";

const Home = () => {

    //use state
    const [blogs,setblogs] =useState([
      {title:"my new website " , body: "lorem ipsum..." ,author : "mario" , id:1 },
      {title:"Welcome party " , body: "lorem ipsum..." ,author : "yoshi" , id:2 },
      {title:"Web dev top tips " , body: "lorem ipsum..." ,author : "mario" , id:3 }
    ])

    const handelDelete = (id) =>{

      const newBlog =blogs.filter(blog => blog.id !== id);
      setblogs(newBlog);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs}  title="All blogs" handelDelete={handelDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario') } title="MArio's blogs" />


        </div>
     );
}

export default Home;