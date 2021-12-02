/*const Button = () => {
  return <button className="btn"></button>;
};
*

const Button = () => {
  Array.prototype.forEach.call(
    document.querySelectorAll(".btn"),
    function (button) {
      const hiddenInput = button.parentElement.querySelector(".btn");
      button.addEventListener("click", function () {
        hiddenInput.click();
      });
    }
  );
};

//export default Button;
*/
/*
import firebase from "firebase";

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
import React from "react";

function Button() {
  const likeBtn = document.querySelector(".like__btn");
  let likeIcon = document.querySelector("#icon"),
    count = document.querySelector("#count");

  let clicked = false;

  likeBtn.addEventListener("click", () => {
    if (!clicked) {
      clicked = true;
      likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
      count.textContent++;
    } else {
      clicked = false;
      likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
      count.textContent--;
    }
  });

  return <div></div>;
}

export default Button;
