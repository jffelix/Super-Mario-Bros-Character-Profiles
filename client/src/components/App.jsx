import React, { useEffect } from "react";
import axios from "axios";

const App = () => {

    useEffect(() => {
        getTitle();
    })

    const getTitle = () => {
        axios.get("/title")
        .then(response => {
            console.log('response.data: ', response.data);
        })
        .catch()
    }

    return (
        <div>Hello from App Component!</div>
    )
}

export default App;