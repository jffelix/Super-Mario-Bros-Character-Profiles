import React from "react";
import characterProfiles from "../../characterProfiles.js";
import CharacterListEntry from "./CharactersListEntry.jsx";

const CharacterList = (props) => {

    return (
        <div>
            {characterProfiles.map((entry, index) =>
                <CharacterListEntry entry={entry} key={index} />
            )}
        </div>
    )

}

export default CharacterList;