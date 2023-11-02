import { Link, Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
      <div className="App container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">EnvData</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDisplay">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarDisplay">
                      <div className="navbar-nav">
                          <Link className="nav-link active" to="/Regions">Regions</Link>
                          <Link className="nav-link" to="/Countries/0">Countries</Link>
                      </div>
                  </div>
              </div>
          </nav> 
          <Outlet />
      </div>
  );
}

export default App;
