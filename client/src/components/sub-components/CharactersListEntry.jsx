import React from "react";

const CharacterListEntry = (props) => {

    // when character is clicked
      // description will render

    return (
        <div>
            <div>
                <img className={props.entry.stylingClass} src={props.entry.url} />
            </div>
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
            </div>
        </div>
    )

}

export default CharacterListEntry;