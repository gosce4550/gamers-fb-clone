import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        width="300"
        height="315"
        src="https://www.youtube.com/embed/vdNwM9Sng9c"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widgets;
