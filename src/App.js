
import Routers from './component/Routers';
import './App.css';
// import Home from './component/Home';
import NavBar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      <Routers/>
    </div>
  );
}

export default App;
