import React, { useState } from "react";

const CharacterListEntry = (props) => {

    // when character is clicked
      // description will render

    const [ wasProfileClicked, setWasProfileClicked] = useState(false);

    const expandProfile = () => {
        setWasProfileClicked(!wasProfileClicked);
    }

    return (
        <div>
            <div>
                <img 
                    className={props.entry.stylingClass} 
                    src={props.entry.url}
                    onClick={expandProfile} />
            </div>
            { wasProfileClicked ? 
            
                <div className="profile">
                    <div className="fullName">
                        <p>{props.entry.fullName}</p>
                    </div>
                    <div className="species">
                        <p>{props.entry.species}</p>
                    </div>
                    <div className="description">
                        <p>{props.entry.description}</p>
                    </div>
                </div> : null
            }
        </div>
    )

}

export default CharacterListEntry;