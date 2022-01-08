import React, { useState } from "react";
import "../../../dist/styles.css";

const CharacterListEntry = (props) => {

    const [ wasProfileClicked, setWasProfileClicked] = useState(false);

    const expandProfile = () => {
        setWasProfileClicked(!wasProfileClicked);
        console.log('wasProfileClicked: ', wasProfileClicked);
    }

    return (
        <div>
            <div>
                <img 
                    className={props.entry.stylingClass} 
                    src={props.entry.url}
                    onClick={expandProfile} 
                    />
            </div>
            { wasProfileClicked ? 
                <div className={props.entry.stylingClass + "Profile"} >
                    <div className="profile">
                        <div className="fullName">
                            <p>Name: {props.entry.fullName}</p>
                        </div>
                        <div className="species">
                            <p>Type: {props.entry.species}</p>
                        </div>
                        <div className="description">
                            <p>{props.entry.description}</p>
                        </div>
                    </div>
                </div> : null
            }
        </div>
    )

}

export default CharacterListEntry;