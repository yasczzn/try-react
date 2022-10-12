const Home = () => {
    
    const handleClick = (e) => {
        console.log('let\'s start your interview', e.target);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    const handleClickThis = (name, e) => {
        console.log('I\'m ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={(e) => handleClickAgain('minghao', e)}>Click me first</button>
            <button onClick={(e) => handleClickThis('jeonghan', e)}>Then click me</button>
            <button onClick={handleClick}>Last pls click Me</button>
        </div>
     );
}
 
export default Home;