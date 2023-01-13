import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Story from './components/story';
import {useState} from "react";
import SourcePopup from "./components/sourcePopup";
import React from "react";
import avatar from "./img/avatar.png";

function App() {

    const [popupOverlay, setPopupOverlay] = useState(false);

    const [story, setStory] = useState([
        {
            id: 0,
            fields: [
                {title: "title", summary: "Een persoon zakt door 4 meter hoog dak van caravanstalling"},
                {
                    title: "Summary",
                    summary: "Een persoon is dinsdagmiddag gewond geraakt na een val van een 4 meter hoog dak. Dat meldt de brandweer. Het slachtoffer zakte door een golfplaten dak van een caravanstalling bij Rutten."
                },
                {
                    title: "Content",
                    summary: "Spicy jalapeno burgdoggen chicken boudin in. Sirloin spare ribs short loin tri-tip, enim boudin consequat sint prosciutto reprehenderit nulla duis id. Reprehenderit bacon minim, irure cow shankle ball tip spare ribs duis anim beef salami aliqua nulla fatback. Kevin alcatra tenderloin, mollit drumstick anim cillum aliqua. Sirloin minim short loin, eiusmod leberkas shank excepteur. Magna deserunt chislic sed adipisicing porchetta ham biltong."
                }
            ],
            sources: [
                {id: 0, type: "contact", name: "Mark makker", email: "", telephone: "", summary: ""},
                {
                    id: 1,
                    type: "pdf",
                    name: "Onderzoek.pdf",
                    origin: "ANP",
                    author: "Mira Janssen",
                    link: "https://www.bua.nl/media/16/9789024406937_-_nel_verhoeven_-_wat_is_onderzoek_zesde_druk_-_inkijkexemplaar.pdf"
                },
                {
                    id: 2,
                    type: "location",
                    name: "Studio Omroep Flevoland",
                    city: "Lelystad",
                    address: "Larserpoortweg 40, 8218 NK Lelystad"
                }
            ],
            tags: [
                {id: 0, text: "Caravan"},
                {id: 1, text: "Ongeluk"},
            ]
        }]);

    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <div className="side-container-left">
                <div className="side-container-top-level">
                    <div className="button-container">
                        <span className="material-icons">home</span>
                        <p>Home</p>
                    </div>
                    <div className="button-container">
                        <span className="material-icons">explore</span>
                        <p>Incoming news</p>
                    </div>
                    <div className="button-container">
                        <span className="material-icons">ballot</span>
                        <p>Script</p>
                    </div>
                    <div className="button-container">
                        <span style={{color: "black"}} className="material-icons">web_stories</span>
                        <p>Stories</p>
                    </div>
                    <div className="button-container">
                        <span className="material-icons">date_range</span>
                        <p>Planner</p>
                    </div>
                </div>
                <div className="side-container-second-level">
                    <p style={{fontWeight: "500"}}>Stories</p>
                    <button>New Story +</button>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                        <span style={{fontSize: "2.5vh", marginRight: "1vh", color: "black"}}
                              className="material-icons">folder_copy</span>
                        <p>STORIES</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                        <span style={{fontSize: "2.5vh", marginRight: "1vh"}} className="material-icons">image</span>
                        <p>MEDIA</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                        <span style={{fontSize: "2.5vh", marginRight: "1vh"}} className="material-icons">list</span>
                        <p>LISTS</p>
                    </div>

                    <br/>
                    <p>Quick filters</p>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                        <span style={{fontSize: "2.5vh", marginRight: "1vh"}} className="material-icons">schedule</span>
                        <p>RECENTLY ADDED</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                        <span style={{fontSize: "2.5vh", marginRight: "1vh"}}
                              className="material-icons">star_outline</span>
                        <p>BOOKMARKS</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "end"}}>
                        <span style={{fontSize: "2.5vh", marginRight: "1vh"}}
                              className="material-icons">perm_identity</span>
                        <p>CREATED BY ME</p>
                    </div>
                </div>
            </div>
            <div className="side-container-right">
                <img src={avatar}/>
                <div className="button-container">
                    <span className="material-icons">question_answer</span>
                    <p>Chat</p>
                </div>
                <div className="button-container">
                    <span className="material-icons">perm_media</span>
                    <p>Media Library</p>
                </div>
                <div className="button-container">
                    <span className="material-icons">call</span>
                    <p>Contacts</p>
                </div>
            </div>
            <SourcePopup
                popupOverlay={popupOverlay}
                setPopupOverlay={setPopupOverlay}
                sources={story[0].sources}
                setStory={setStory}
                story={story[0]}
                tags={story[0].tags}
            />
            <div className="content container offset-md-2">
                <br/>
                <br/>
                <Story
                    title={story[0]["fields"][0].summary}
                    fields={story[0].fields}
                    sources={story[0].sources}
                    setPopupOverlay={setPopupOverlay}
                    popupOverlay={popupOverlay}
                    tags={story[0].tags}
                    story={story[0]}
                    setStory={setStory}
                />
            </div>
        </div>
    );
}

export default App;
