import React,{Component} from "react";
import AsyncSelect from 'react-select/async';
import { NavLink } from "react-router-dom";
//import App2 from 'gamers-fb-clone/react-app2/src'
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ReactDOM from "react-dom";
import "./index.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import db from "./firebase";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ForumIcon from "@mui/icons-material/Forum";
import { useStateValue } from "./StateProvider";
import { ChatEngine } from "react-chat-engine";

//export function launchChat() {
//  ReactDOM.render(<AppChat />, document.getElementById("root"));
//ReactDOM.render(<AppChat />, document.createElement('root'));
//Element.attachShadow(AppChat);
//}

//export function ShadowContent({ root, newChat})

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedTag: []
      }
  }

  loadOptions = async (inputValue) => {
      inputValue = inputValue.toLowerCase().replace(/\W/g, "");
      return new Promise((resolve => {
              db.collection('posts')
                  .orderBy('message')
                  .startAt(inputValue)
                  .endAt(inputValue + "\uf8ff")
                  .get()
                  .then(docs => {
                      if (!docs.empty) {
                          let recommendedTags = []
                          docs.forEach(function (doc) {
                              const tag = {
                                  value: doc.id,
                                  label: doc.data().username
                              }
                              recommendedTags.push(tag)
                          });
                          return resolve(recommendedTags)
                      } else {
                          return resolve([])
                      }
                  })

          })
      )
  }
  
  handleOnChange = (tags) => {
      this.setState({
          selectedTag: [tags]
      })
  }

  render() {
      return (
          <div className="header_input">
              <AsyncSelect
                  loadOptions={this.loadOptions}
                  onChange={this.handleOnChange}
              />
              <p>Selected Tag:</p>
              {
                  this.state.selectedTag.map(e => {
                      return (
                          <li key={e.value}>
                              {e.label}
                          </li>
                      )
                  })
              }
          </div>
      );
  }

}
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn.discordapp.com/attachments/885634202593296385/902490745825558568/4550_-_Logo_Design.png"
          alts=""
        />
        <div className="header_input">
          <SearchIcon />

          <input placeholder="Search Facebook" type="text" />
          App
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header_option">
          <a target="blank" href="https://www.youtube.com/">
            <SubscriptionsIcon fontSize="large" />
          </a>
        </div>

        <div className="header_option">
          <a target="blank" href="">
            <SupervisedUserCircleIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className="header_right"></div>
      <div className="header_info">
        <a target="blank" href="">
          <AccountCircleIcon src={user.photoURL} />
        </a>
        <h4>{user.displayName}</h4>
      </div>
      <div className="SignOut">
        <a target="_self" href="">
          Logout
        </a>
      </div>

      <a target="_blank" href="https://amazing-mclean-9eabed.netlify.app">
        <ForumIcon />
      </a>
    </div>
  );
}

export default Header;
