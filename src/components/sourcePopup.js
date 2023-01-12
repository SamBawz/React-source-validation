import React, {useState} from "react";
import '../App.css';
import SourceCollapsibleItem from "./sourceCollapsibleItem";
import SourceRecommendation from "./sourceRecommendation";

function SourcePopup(props) {

    const [potentialSources, setPotentialSources] = useState([]);

    //This function only temporarily works on your local machine if https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related is installed (great for local testing).
    //This plugin prevents the browser blocking resources cross-origin. This restriction exists to prevent developers making api calls in frontend code, which is dangerous because users can access the api key.
    //If you want to launch this project on a live environment, you would have to create a backend proxy server that makes the api calls for you. You would have to essentially create your own api server as a bridge to access other api's.
    //For more info search: cross-origin requests serpapi
    function searchScholar() {
        const SerpApi = require('google-search-results-nodejs');
        const search = new SerpApi.GoogleSearch("74eb8a64d133729de9516b99b0a67383e39a1aac8ac16a8a1954ce6fd9f07e24");

        let query = "";
        props.tags.forEach((tag) => {
            query += tag.text + " ";
        })

        search.json({
            q: query,
            engine: "google_scholar"
        }, (result) => {
            let sourcesArray = [];
            /*
            for(let i = 0; i < 4; i++) {
                sourcesArray.push(result["organic_results"][i])
            }
             */
            result["organic_results"].forEach((result) => {
                sourcesArray.push(result)
            })
            setPotentialSources(sourcesArray)
        })
    }

    const togglePopup = () => {
        props.setPopupOverlay(!props.popupOverlay)
    }

    function addSource(type) {
        //Push a new source to the relevant story
        const id = Math.floor(Math.random() * 10000000);
        switch (type) {
            case ("contact"):
                props.story.sources.push({id: id, type: "contact", name: "", email: "", telephone: "", summary: ""})
                break;
            case ("pdf"):
                props.story.sources.push({id: id, type: "pdf", name: "", origin: "", author: ""})
                break;
            case ("location"):
                props.story.sources.push({id: id, type: "location", name: "", city: "", address: ""})
                break;
            default:
                break;
        }

        //Get the new story
        let story = props.story

        //Update the story array with the new story
        props.setStory([
            //Contains all the old items (we don't want that in this case)
            //...props.story,
            //Plus the new story
            story
        ]);
    }

    return (
        <div className="popup-container" id="popup" style={props.popupOverlay ? {display: "block"} : {display: "none"}}>
            <br/>
            <br/>
            <div className="container offset-md-2">
                <div className="row-md-6 source-card">
                    <div className="row mb-3">
                        <div className="col">
                            <h2>Sources</h2>
                        </div>
                        <div className="col d-flex align-items-start justify-content-end">
                            <span id="closeSources" className="material-icons close-button" onClick={togglePopup}>close</span>
                        </div>
                    </div>

                    {
                        props.sources.map(source => (
                            <SourceCollapsibleItem
                                source={source}
                                setStory={props.setStory}
                                story={props.story}
                            />
                        ))
                    }

                    <div className="row">
                        <div className="col-sm-1">
                            <button onClick={e => addSource("pdf")}><span className="material-icons">picture_as_pdf</span></button>
                        </div>
                        <div className="col-sm-1">
                            <button onClick={e => addSource("contact")}><span className="material-icons">person</span></button>
                        </div>
                        <div className="col-sm-1">
                            <button onClick={e => addSource("location")}><span className="material-icons">place</span></button>
                        </div>
                    </div>

                    <div className="row mt-5" style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                        <h2 style={{width: "auto"}}>Potential sources</h2>
                        <span onClick={searchScholar} style={{fontSize: "1.5rem", cursor: "pointer", width: "auto", height: "auto", padding: "0"}} className="material-icons">refresh</span>
                    </div>
                    <div className="row mb-3">
                        <h6>Based on your tags</h6>
                    </div>
                    <div className="row" style={{overflowY: "scroll", maxHeight: "30rem"}}>
                        <ul>
                            {
                                potentialSources.map(source => (
                                    <SourceRecommendation
                                        title={source.title}
                                        description={source.snippet}
                                        link={source.link}
                                        publication_info={source.publication_info}
                                        story={props.story}
                                        setStory={props.setStory}
                                    />
                                ))
                            }
                            {
                                /*
                                <SourceRecommendation
                                title={"test"}
                                description={"test"}
                                link={"test"}
                                story={props.story}
                                setStory={props.setStory}
                                />
                                 */
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default SourcePopup;