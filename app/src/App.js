import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="Manubar">
          <div className="MainManu">
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Latest Developments</li>
              <li>Contact Us</li>
              {/* <li></li>
              <li></li> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
