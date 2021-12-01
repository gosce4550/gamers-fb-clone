//Code for Like Button from this link
//https://levelup.gitconnected.com/how-to-implement-like-button-in-react-df5e7b5d21aa
/*
import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "./hand.svg";

import "./styles.scss";

const particleList = Array.from(Array(10));

const LikeButton = () => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(true);
      }}
      onAnimationEnd={() => setClicked(false)}
      className={cn("like-button-wrapper", {
        liked,
        clicked,
      })}
    >
      {liked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className={cn("suffix", { liked })}>d</span>
      </div>
    </button>
  );
};

export default LikeButton;
*/

//From terrence's article
/*
import firebase from "firebase";
import db from "./firebase";

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
*/

const like = () => {
  const updateLike = firebase.database().ref("/users/event/" + postKey);
  updateLike.update({
    likes: likes + 1,
    liked: true,
  });
};
