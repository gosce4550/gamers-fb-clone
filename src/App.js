import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";

import "./App.css";
import { useStateValue } from "./StateProvider";
//Everthing below this is dealing with routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

//import About from "./Sidebar";
//import Posts from "./Posts";
import About from "./About";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";

//Deals with overall structure and rendering of the app
function App() {
  const [{ user }, distpatch] = useStateValue();
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header>
              <Routes>
                <Route path="/" element={<Feed />} />
              </Routes>
            </Header>

            <div className="app_body">
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <nav className="nav">
                <button className="homeButton">
                  <PeopleIcon />
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </button>

                <button className="aboutButton">
                  <InfoIcon />
                  <Link to="/about" style={{ padding: 5 }}>
                    <a>About</a>
                  </Link>
                </button>
              </nav>

              <Widgets />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

/*<div className="app_posts">
<Posts user={user} />
</div>*/

//
