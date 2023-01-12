import React, {useState} from "react";
import '../App.css';


//props staat voor properties en kunnen meegeven worden bij het aanmaken van een tweet component (zie app.js)
function StoryField(props) {
    return (
        <div>
            <div className="row-m0 story-field-header">
                <p>{props.title}</p>
            </div>
            <div className="row-m0">
                <div className="col-md-12 story-field">
                    <textarea readOnly value={props.summary} />
                </div>
            </div>
            <br/>
        </div>
    )
}

export  default StoryField;