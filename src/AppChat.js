import React from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//../contexts/AuthContext
import { AuthProvider } from "./AuthContext";

import Chats from "./Chats"
import Login from "./Login"

function AppChat() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider> 
          <Switch>
            <Route path="/chats"Chats />
            <Route path="/"Login /> 
          </Switch>
        </AuthProvider> 
      </Router>
    </div>

  

  )
}

//ReactDOM.render(<AppChat/>, document.getElementId('root'));

export default AppChat
