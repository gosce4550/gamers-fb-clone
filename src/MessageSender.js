import React, { useState } from "react";
import "./MessageSender.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import axios from "axios";
import Button from "./Button";

/*class MessageSender extends Comment{
  state ={
    selectedFile:null;
  }
  fileSelectedHandler = event =>{
    this.state({
      selectedFile:event.target.files[0]
    });
  }
  fileUploadHandler = () => {

  }
}

<input type="file" onChange={this.fileSelectedHandler} />
*/

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    //Some clever data base stuff
    setInput("");
    setImageUrl("");
  };
  //Upload picture JS

  //Structure, layout, inline design
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <AccessibilityIcon src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            type="text"
            placeholder="Whats on your mind?"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL(optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <button className="videoButton" onClick={handleSubmit} type="submit">
            <VideocamIcon style={{ color: "red" }} />
          </button>
          <h3>Upload a Video</h3>
        </div>

        <div className="messageSender_option">
          <button onClick={handleSubmit} type="submit">
            <PhotoLibraryIcon />
          </button>

          <h3>Upload a Picture</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "#92920fbd" }} />
          <h3>Feeling?</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
