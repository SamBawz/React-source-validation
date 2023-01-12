import React, {useState} from "react";
import '../App.css';

function SourceListItem(props) {

    function getIcon(type) {
        let icon = "placeholder";
        switch(type) {
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

    function getLink(type) {
        let link = "";
        switch(type) {
            case "contact":
                if(props.name !== undefined && props.name.length > 0) {
                    link = "https://www.google.nl/search?q=" + props.name;
                }
                break;
            case "pdf":
                if(props.link !== undefined && props.link.length > 0) {
                    link = props.link;
                }
                break;
            case "location":
                if(props.address !== undefined && props.address.length > 0) {
                    link = "https://www.google.nl/maps/search/" + props.address;
                }
                break;
            default:
                break;
        }
        return link;
    }

    if(getLink(props.type).length > 0) {
        return (
            <a style={{textDecoration: "none"}} href={getLink(props.type)} target={"_blank"}><li><span className="material-icons">{getIcon(props.type)}</span>{props.name}</li></a>
        )
    }
    else {
        return (
            <li><span className="material-icons">{getIcon(props.type)}</span>{props.name}</li>
        )
    }
}

export  default SourceListItem;