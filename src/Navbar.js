const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>My _World</h1>
        <div className="links">
            <a href="/">Home </a>
            <a href="/create" style={{
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>_World </a>
            <a href="/">Cheers </a>
            <a href="/">Fallin'Flower </a>
        </div>
    </nav> 
    );
}
 
export default Navbar;