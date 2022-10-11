import Navbar from './Navbar';
import Home from './Home'

function App() {
  const title = 'Welcome to my _world';
  const likes = 50;
  const link = "https://youtu.be/gRnuFC4Ualw"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <Home />
        <p>Hello _World</p>
        <p>Liked { likes } times</p>
        <p>{ Math.random() * 10 }</p>
        <a href={ link }>Click Here</a>
      </div>
    </div>
  );
}

export default App;
