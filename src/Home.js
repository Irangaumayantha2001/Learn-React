// 1. we want to use useState we first import useState from react



import { useState } from "react";

const Home = () => {

    //use state
   const [name,setName] =useState('iranga')
   const [age,setAge]=useState(20) 


// this is click events and functions
const handleClick = () =>{
    setName('amal');
    setAge(21)

}

    return ( 
        <div className="Content">
            <h2> Homepage</h2>
            <p> My name is {name} . i am {age} years old; </p>
           <button onClick={handleClick}>click me</button>
        
        </div>
     );
}

export default Home;