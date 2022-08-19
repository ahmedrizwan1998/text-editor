import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleCopyText = () => {
        let newText = document.getElementById("myBox").value;
        navigator.clipboard.writeText(newText).then(() => {
            alert("text copied to clipboard")
        });    
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    const handleChange = (event) => {
        setText(event.target.value);
    }
  return (
    <div className='container my-5'style={{color: props.mode === "dark"?"white":"#0d0c24"}}>    
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea onChange={handleChange} style={{backgroundColor: props.mode === "light"?"white":"grey", 
            color: props.mode === "dark"?"white":"#0d0c24"}} value={text} className="form-control my-3" id="myBox" rows="8"></textarea>
            <button type="button" onClick={handleUpperCase} className="btn btn-secondary mx-2">To UpperCase</button>
            <button type="button" onClick={handleLowerCase} className="btn btn-secondary mx-2">To LowerCase</button>
            <button type="button" onClick={handleCopyText} className="btn btn-secondary mx-2">Copy Text</button>
            <button type="button" onClick={handleClearText} className="btn btn-secondary mx-2">Clear Text</button>
            <button type="button" onClick={handleExtraSpace} className="btn btn-secondary mx-2">Remove Extra Space</button>
        </div>
        <div className="container">
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Text To Preview"}</p>
        </div>
    </div>
  )
}

export default TextForm


    