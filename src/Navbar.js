const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>This is my blog</h1>
        <div className="links">
            <a href="/" >Home</a>
            <a href="/" style={{
                color: "white",
                backgroundColor:"blueviolet"
            }} >New Blog</a>
            <a href="/" >Home</a>
        </div>
    </nav>
     );
}
 
export default Navbar;