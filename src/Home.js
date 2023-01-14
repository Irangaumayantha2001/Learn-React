const Home = () => {

const handleClick = () =>{
    console.log("hi react")
}



const handleClickAgain = (name) =>{
    console.log("hi react" + name)
}

    return ( 
        <div className="Content">
            <h2> Homepage</h2>
            <button onClick={handleClick}>click me</button>
            <br/>
            <button onClick={() => handleClickAgain('iranga')}>click me Again</button>
        </div>
     );
}
 
export default Home;