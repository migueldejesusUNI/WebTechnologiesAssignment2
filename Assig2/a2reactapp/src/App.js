import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">EnvData</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                   <Link className="nav-link active" to="/Home">Home</Link>
                  </div>
              </div>
          </nav>
      </div>
  );
}

export default App;
