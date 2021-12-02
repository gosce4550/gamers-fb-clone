import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./Posts.css";
import { useState } from "react";
//import Post from "Feed";
import firebase from "./firebase";
//Like Button
import Button from "./Button";
import "./Button.css";

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

function Post({ profilePic, image, username, timestamp, message, like }) {
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
          <button class="like__btn" onClick={Button}>
            <span id="icon">
              <i class="far fa-thumbs-up"></i>
            </span>
            <span id="count">0</span> Like
          </button>
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
/*
<div class="CountLike" id="Like Count">
            <button class="button button1">
              <i class="fa fa-heart"></i> Like{Button}
              <span class="counterStat">...</span>
            </button>
          </div>
*/
