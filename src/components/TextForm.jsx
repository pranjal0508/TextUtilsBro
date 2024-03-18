import React, { useState } from 'react';
import './style.css';

function TextForm(props) {
    const [text, setText] = useState("");

    let words = text.split(/\s+/); // Including spaces
    let noOfWords = 0;
    for (let word of words) {
        if (word != "" && word != "\n") { //
            noOfWords++;
        }
    }

    const upperCaseHandler = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!!!", "success");
    }
    const lowerCaseHandler = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!!!", "success");
    }
    const reverseHandler = () => {
        let newString = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newString += text.charAt(i);
        }
        setText(newString);
        props.showAlert("Text Reversed!!!", "success");
    }

    const clearTextHandler = () => {
        setText("");
        props.showAlert("Text Cleared!!!", "warning");
    }

    const speakHandler = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const replaceHandler = () => {
        let param1 = document.querySelector("#replaceParam1");
        let param2 = document.querySelector("#replaceParam2");
        setText(text.replaceAll(param1.value, param2.value));
        props.showAlert("Text Replaced!!!", "success");

    }
    const copyHandler = () => {
        let textBox = document.querySelector("#myBox");
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
        props.showAlert("Text Copied to Clipboard!!!", "success");

    }
    const removeExtraSpacesHandler = () => {
        let newTextArr = text.split(/[ ]+/);
        setText(newTextArr.join(" "));
        props.showAlert("Extra Spaces Removed!!!", "success");

    }
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className={`container my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} value={text} onChange={onChangeHandler} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={upperCaseHandler} disabled={text.length === 0}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-1" onClick={lowerCaseHandler} disabled={text.length === 0}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={reverseHandler} disabled={text.length === 0}>Reverse Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={clearTextHandler} disabled={text.length === 0}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={speakHandler} disabled={text.length === 0}>Speak</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copyHandler} disabled={text.length === 0}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={removeExtraSpacesHandler} disabled={text.length === 0}>Remove Extra Spaces</button> <br />
                <button className="btn btn-primary mx-1 my-1" onClick={replaceHandler} disabled={text.length === 0}>Replace</button>
                <input id='replaceParam1' className="mx-1" type="text" />
                with
                <input id='replaceParam2' className="mx-1" type="text" />
                <div className="container">
                    <h1>Your text Summary</h1>
                    <p>{noOfWords} words and {text.length} letters</p>
                    <p>{noOfWords * 0.008} Minutes read (125 words per minute)</p>
                    <h2>Preview Text</h2>
                    <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
                </div>
            </div>
        </>
    )
}

export default TextForm 