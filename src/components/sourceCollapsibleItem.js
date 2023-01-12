import React, {useState} from "react";
import '../App.css';

function SourceCollapsibleItem(props) {

    function getIcon(type) {
        let icon = "placeholder";
        switch (type) {
            case "contact":
                icon = "account_circle";
                break;
            case "pdf":
                icon = "picture_as_pdf";
                break;
            case "location":
                icon = "place";
                break;
            default:
                break;
        }
        return icon;
    }

    function updateStory(value, id, field) {
        let story = props.story;
        story.sources[id][field] = value;
        props.setStory([
            //...props.story,
            story
        ]);
    }

    function deleteSource() {
        let sources = props.story.sources
        sources = sources.filter((el) => el.id !== props.source.id);
        props.story["sources"] = sources
        props.setStory([props.story])
    }

    function returnSourceFields(type, id) {
        if (type === "contact") {
            return (
                <div className="source-item-content">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Name</p>
                        </div>
                        {/* e.target.value provides the elements value as argument to the function */}
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"name")} value={props.source.name}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Email</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"email")} value={props.source.email}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Telephone</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"telephone")} value={props.source.telephone}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Summary</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"summary")}
                                  placeholder="Omschrijf wat je besproken hebt..." value={props.source.summary}/>
                    </div>
                </div>
            )
        } else if (type === "pdf") {
            return (
                <div className="source-item-content">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Name</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"name")} value={props.source.name}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Origin</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"origin")} value={props.source.origin}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Author</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"author")} value={props.source.author}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Link</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"link")} value={props.source.link}/>
                    </div>
                </div>
            )
        } else if (type === "location") {
            return (
                <div className="source-item-content">
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Name</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"name")} value={props.source.name}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>City</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"city")} value={props.source.city}/>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Address</p>
                        </div>
                        <textarea className="col-sm-8 source-field" onChange={(e) => updateStory(e.target.value, id,"address")} value={props.source.address}/>
                    </div>
                </div>
            )
        }
        return "";
    }

    const [expanded, setExpanded] = useState(false);
    function expandSourceItem() {
        setExpanded(!expanded);
    }

    return (
        <div className="row">
            <div className="col-md-8 source-item" style={!expanded ? {height: "3rem"} : {height: "100%"}}>
                <div className="row source-item-title" style={{overflowY: "hidden"}}>
                    <div className="col d-flex align-items-start">
                        <span className="material-icons">{getIcon(props.source.type)}</span><span style={{height: "100%", fontSize: "1rem"}}>{props.source.name}</span>
                    </div>
                    <div className="col d-flex align-items-start justify-content-end">
                        <span className="material-icons collapse-button" onClick={expandSourceItem} style={expanded ? {transform: "rotate(90deg)"} : {transform: "rotate(0deg)"}}>expand_more</span>
                    </div>
                </div>
                <br/>
                {returnSourceFields(props.source.type, props.source.id)}
                <button onClick={deleteSource} style={{marginBottom: "0.75rem"}}><span className="material-icons">delete</span></button>
            </div>
        </div>
    )
}

export default SourceCollapsibleItem;