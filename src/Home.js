
import BlogList from "./BlogList";
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
            <BlogList blogs={blogs}  title="All blogs" />
        </div>
     );
}

export default Home;