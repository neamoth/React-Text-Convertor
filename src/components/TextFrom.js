import React, {useState} from 'react';

export default function TextFrom(props) {
    const [text, setText] = useState("");
    const buttonUpHandler = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const buttonLowHandler = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onChangehandler = (event)=>{
        setText(event.target.value)
    }
    return <><div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="mb-3 form-control" value={text} onChange={onChangehandler} id="myBox" rows="8"></textarea>
        <button className="btn btn-success" onClick={buttonUpHandler} >
            Convert upperCase
        </button>
        <button className="btn btn-danger mx-2" onClick={buttonLowHandler} >
            Convert lowerCase
        </button>
    </div>
    <div className="container">
        <h1>
            Your text summary
        </h1>
        <p>
            {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>
        You can read this in {0.008 *text.split(" ").length} Minutes 
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
