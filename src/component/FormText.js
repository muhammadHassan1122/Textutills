// import React, { useState } from "react";

import { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    console.log("uppercase was clicked  +  text");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloclick = () => {
    console.log("Lowercase was clicked  +  text");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclearclick = () => {
    let newText = "";
    setText(newText);
  };

  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h1>{props.form}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-secondary" onClick={handleupclick}>
          {props.Buttontitle}
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleloclick}>
          {props.Buttontitle1}
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleclearclick}>
          Clear text
        </button>
      </div>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
