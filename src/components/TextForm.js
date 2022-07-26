import React, { useState } from "react";

export default function TextForm(props) {
  // this function is for to convert the data into uppercase
  const handlerUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  // this function is for to convert the data into Lowercase
  const handlerLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  // this function is for to clear the text
  const handlerClearClick = () => {
    let newText =''
    setText(newText);
  };
  const handelOnchange = (event) => {
    setText(event.target.value);
  };
  // this function is for the copy the text
  const handleCopy =() => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  //  this function is to remove the extra spacres that have been added into the text
  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  
  
  const [text, setText] = useState("");
  // setText("start here");
  return (
    <>
      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white': '#183969'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor : props.mode === 'dark' ? 'grey': 'white', color: props.mode === 'dark' ? 'white': '#183969'}}
            onChange={handelOnchange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handlerUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlerLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handlerClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handelExtraSpace}>
          Remove extra spaces
        </button>
      </div>
        <div className="container"style={{color : props.mode === 'dark' ? 'white': '#183969'}} >
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the box to preview it here"}</p>
      </div>
    </>
  );
}
