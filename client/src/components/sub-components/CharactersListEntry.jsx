import React from "react";

const CharacterListEntry = (props) => {

    return (
        <div>
            <img src={props.entry.url} />
            <p>{props.entry.fullName}</p>
            <p>{props.entry.species}</p>
            <p>{props.entry.description}</p>
        </div>
    )

}

export default CharacterListEntry;