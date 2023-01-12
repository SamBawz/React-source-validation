import React, {useState} from "react";
import '../App.css';

function SourceRecommendation(props) {

    function addRecommendation() {
        let newId = Math.floor(Math.random() * 1000000)
        let newSource = {id: newId, type: "pdf", name: props.title, origin: props.publication_info["summary"], author: props.publication_info["summary"], link: props.link};

        props.story["sources"].push(newSource)
        //console.log(props.story["sources"]);
        props.setStory([props.story]);
    }

    return (
        <div>
            <li>
                <h5>{props.title}</h5>
                <div className="row">
                    <div className="col-sm-11">
                        <p>{props.description}</p>
                    </div>
                    <div className="col-sm-1">
                        <a href={props.link} target="_blank">
                            <span style={{color: "#BF2033"}} className="material-icons">navigate_next</span>
                        </a>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.7rem", color: "#BF2033"}} onClick={addRecommendation}>
                    <span className="material-icons" title={"Add source"}>add</span>
                </div>
            </li>
            <hr/>
        </div>
    )
}

export  default SourceRecommendation;