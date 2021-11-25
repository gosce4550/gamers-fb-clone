import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
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
//import About from "./About";
import SidebarRow from "./Sidebar";
//import About from "./Sidebar";
//import Posts from "./Posts";
import About from "./About";
import { flexbox } from "@mui/system";
import PeopleIcon from "@mui/icons-material/People";
/*
function About() {
  return (
    <div style={{padding: 20}}>
      <p>THIS BETTER WORK</p>
    </div>
  );
}
*/
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
            <Header />

            <div className="app_body">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Feed />} />
              </Routes>
              <nav className="nav">
                <button className="homeButton">
                  <Link to="/">
                    <PeopleIcon />
                    <p>Home</p>
                  </Link>
                </button>

                <button className="aboutButton">
                  <Link to="/about" style={{ padding: 5 }}>
                    <p>About</p>
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
