import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import "./App.css";
import { useStateValue } from "./StateProvider";
//Everthing below this is dealing with routing
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
//import About from "./About";
import SidebarRow from "./Sidebar";
//import About from "./Sidebar";
//import Posts from "./Posts";
import About from "./About";
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
                <nav>
                   <Link to="/about" style={{padding: 5}} >
                     About
                   </Link>
  
                  <Link to="/">
                    Feed
                  </Link>
                  <Widgets />
              </nav>
              </div>
          </>
        )}
      </div>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<Feed />} />
      </Routes>
    </Router>
  );
}



export default App;

/*<div className="app_posts">
<Posts user={user} />
</div>*/

//
