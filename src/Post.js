import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import { LikeButton } from "@lyket/react";
import "./Posts.css";

import firebase from "./firebase";
import zIndex from "@mui/material/styles/zIndex";
//Like Button
import Button from "./Button";
/*FOr the like button 1 hour and 51 minutes 
class App extends Post {
  state = {
    count: 0,
  };
  incrementMe = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return <ThumbsUpIcon {this.state.count}/>;
  }
}
*/
//Comments function

//Likes function
//https://likebtn.com/en/

//Posting function
var dCounters = document.querySelectorAll(".CountLike");
[].forEach.call(dCounters, function (dCounter) {
  var el = dCounter.querySelector("button");
  var cId = dCounter.id;
  var dDatabase = firebase.database().ref("Like Number Counter").child(cId);

  // get firebase data
  dDatabase.on("value", function (snap) {
    var data = snap.val() || 0;
    dCounter.querySelector("span").innerHTML = data;
  });

  // set firebase data
  el.addEventListener("click", function () {
    dDatabase.transaction(function (dCount) {
      return (dCount || 0) + 1;
    });
  });
});

function Post({ profilePic, image, username, timestamp, message, Likes }) {
  return (
    <div className="post">
      <div className="post_top">
        <AccountCircle src={profilePic} className="post_account" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="post_options">
        <div className="post_option">
          <div class="CountLike" id="Like Count">
            <button class="button button1">
              <i class="fa fa-heart"></i> Like{" "}
              <span class="counterStat">...</span>
            </button>
          </div>
        </div>
        <div className="post_option">
          <button>
            <ChatBubbleOutlineIcon />
          </button>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
//2 hours and 24 minutes need to define profile pic.
//I just spelled it wrong...
