import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        width="310"
        height="330"
        src="https://www.youtube.com/watch?v=FweDl4U5uzI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widgets;
