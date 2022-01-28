import React, { useState } from 'react';

export default function TextFrom(props) {
    const [text, setText] = useState("");
    const buttonUpHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const buttonLowHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const buttonClearHandler = () => {
        let newText = '';
        setText(newText);
    }
    const handleSpaces = () => {
        let newText = text.trim();
        setText(newText);
    };
    const onChangehandler = (event) => {
        setText(event.target.value)
    }
    return <><div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="mb-3 form-control" value={text} onChange={onChangehandler} id="myBox" rows="8"></textarea>
        <button className="btn btn-success" onClick={buttonUpHandler} >
            Convert upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={buttonLowHandler} >
            Convert lowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={buttonClearHandler} >
            Clear
        </button>
        <button className="btn btn-info mx-2" onClick={handleSpaces} >
        WhiteSpaceRemove
        </button>
    </div>
        <div className="container">
            <h1>
                Your text summary
            </h1>
            <p>
                {text.split(".").length - 1} sentance, {text.split(" ").length} words, {text.length} characters.
            </p>
            <p>
                You can read this in {0.008 * text.split(" ").length} Minutes
            </p>
            <h2>
                Preview
            </h2>
            <p>
                {text}
            </p>
        </div>
    </>
}
