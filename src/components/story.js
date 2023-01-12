//Import react van de node_module folder
import React, {useState} from "react";
import StoryField from "./storyField";
import SourceListItem from "./sourceListItem";
import StoryTag from "./storyTag";

//Create a component
function Story(props) {

    //const storyTitle = "Story 1";
    /*
    const storyFields = [
        {title: "title", summary: "Een persoon zakt door 4 meter hoog dak van caravanstalling"},
        {title: "Summary", summary: "Een persoon is dinsdagmiddag gewond geraakt na een val van een 4 meter hoog dak. Dat meldt de brandweer. Het slachtoffer zakte door een golfplaten dak van een caravanstalling bij Rutten."},
        {title: "Content", summary: "Spicy jalapeno burgdoggen chicken boudin in. Sirloin spare ribs short loin tri-tip, enim boudin consequat sint prosciutto reprehenderit nulla duis id. Reprehenderit bacon minim, irure cow shankle ball tip spare ribs duis anim beef salami aliqua nulla fatback. Kevin alcatra tenderloin, mollit drumstick anim cillum aliqua. Sirloin minim short loin, eiusmod leberkas shank excepteur. Magna deserunt chislic sed adipisicing porchetta ham biltong."}
    ];

     */
    const [fields, setFields] = useState(props.fields)
    const [storyTitle, setStoryTitle] = useState(props.title);

    const [blackOverlay, setBlackOverlay] = useState(false);

    const [tagText, setTagText] = useState("");

    /*
    for (let i = 0; i < numrows; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<ObjectRow key={i} />)
    }

     */

    const togglePopup = (index) => {
        props.setPopupOverlay(!props.popupOverlay)
        /*
        if(sourceItemArray[index].offsetHeight <= sourceTitleArray[index].offsetHeight) {
            sourceItemArray[index].style.height = '100%';
            collapseButtonArray[index].style.transform = "rotate(90deg)";
        }
        else {
            sourceItemArray[index].style.height = sourceTitleArray[index].offsetHeight.toString() + 'px';
            collapseButtonArray[index].style.transform = "rotate(0deg)";
        }

         */
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