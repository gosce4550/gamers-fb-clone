import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import { LikeButton } from "@lyket/react";

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

function Post({ profilePic, image, username, timestamp, message }) {
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
          <LikeButton />
          <p>Like</p>
        </div>
        <div className="post_option">
          <button>
            <ChatBubbleOutlineIcon />
          </button>
          <p>Comment</p>
        </div>
        <div className="post_option">
          <button>
            <NearMeIcon />
          </button>
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
//2 hours and 24 minutes need to define profile pic.
//I just spelled it wrong...
