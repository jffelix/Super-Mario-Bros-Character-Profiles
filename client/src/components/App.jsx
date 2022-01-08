import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./sub-components/CharactersList.jsx";
import "../../dist/styles.css";

const App = () => {

    useEffect(() => {
        getTitle();
    })

    const [ title, setTitle ] = useState("");

    const getTitle = () => {
        axios.get("/title")
        .then(response => {
            setTitle(response.data);
        })
        .catch()
    }

    return (
        <div className="app">
            <h1 className="title">
                <span className="title-span">{title}</span>
            </h1>
            <CharacterList />
        </div>
    )
}

export default App;