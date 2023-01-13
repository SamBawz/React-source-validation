//Import react van de node_module folder
import React, {useState} from "react";
import StoryField from "./storyField";
import SourceListItem from "./sourceListItem";
import StoryTag from "./storyTag";

//Create a component
function Story(props) {

    const [tagText, setTagText] = useState("");

    const togglePopup = (index) => {
        props.setPopupOverlay(!props.popupOverlay)
    }

    function addTag() {
        if (tagText.length > 0) {
            //Make a new tag
            let newId = Math.floor(Math.random() * 1000000)
            let newTag = {id: newId, text: tagText}
            //Update to a new story
            props.story["tags"].push(newTag)
            //Update the story array with the new story
            props.setStory([props.story]);
            setTagText("")
        }
    }

    //Javascript code gaat altijd tussen {}
    //Nooit () bij de functie schrijven die je wilt aanroepen, anders wordt de functie meteen uitgevoerd bij het laden van de pagina.
    return (
        <div className="row-md-12">
            <div className="story-card container-m0">
                <div className="story-top row-m0 d-flex align-items-center">
                    <p style={{margin: "0 0 0 1rem"}}>{props.title}</p>
                </div>
                <div className="story-content container-m0">
                    {
                        props.fields.map(field => (
                        <StoryField
                            title={field.title}
                            summary={field.summary}
                        />
                        ))
                    }
                    <div className="row">
                        <div className="col">
                            <h2>Sources</h2>
                            <ul className="list">
                                {
                                    props.sources.map(source => (
                                        <SourceListItem
                                            name={source.name}
                                            type={source.type}
                                            author={source.author}
                                            link={source.link}
                                            address={source.address}
                                        />
                                    ))
                                }
                            </ul>
                            <button id="addSource" onClick={togglePopup}><span className="material-icons">menu_open</span></button>
                        </div>
                        <div className="col">
                            <h2>Tags</h2>
                            <div style={{display: "flex", flexDirection: "row", alignContent: "center", height: "2.5rem", marginBottom: "1rem"}}>
                                <textarea onChange={(e) => setTagText(e.target.value)} style={{height: "2rem", resize: "none", width: "50%", border: "#D1D1D1 1px solid"}} placeholder={"New tag"} value={tagText}/>
                                <button onClick={addTag} style={{height: "2rem"}}>+</button>
                            </div>
                            <ul className="tag-list">
                                {
                                    props.tags.map((tag) => (
                                        <StoryTag
                                            tag={tag}
                                            story={props.story}
                                            setStory={props.setStory}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story;