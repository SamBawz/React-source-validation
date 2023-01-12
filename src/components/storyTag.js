import React, {useState} from "react";
import '../App.css';

function StoryTag(props) {

    function deleteTag() {
        let tags = props.story.tags
        //Filter de tags array en haal alle objecten eruit waarvan het id gelijk staat aan het id van deze specifieke component
        tags = tags.filter((el) => el.id !== props.tag.id);
        props.story["tags"] = tags
        //Stories are kept in an array so put brackets around the end-result
        props.setStory([props.story])
    }

    return (
        <li title={"Delete"} onClick={deleteTag} className={"tagContainer"}><div className={"tagTrash"}><span className="material-icons">delete</span></div><div className={"tagName"}>{props.tag.text}</div></li>
    )
}

export  default StoryTag;