import { useState } from "react";

const Home = () => {
    
    const [nama, setName] = useState('dino');

    const changeName = () => {
        setName('vernon')
    }

    const handleClick = () => {
        console.log('let\'s start your interview');
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    const handleClickThis = (name) => {
        console.log('I\'m ' + name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ nama }</p>
            <button onClick={changeName}>Change user</button>
            <button onClick={(e) => handleClickAgain('minghao', e)}>Click me first</button>
            <button onClick={(e) => handleClickThis('jeonghan')}>Then click me</button>
            <button onClick={handleClick}>Last pls click Me</button>
        </div>
     );
}
 
export default Home;