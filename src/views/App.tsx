import React, { Component } from "react";
import "./App.css"

type AppProps = {
    name: string
}


const App = ({ name }: AppProps) => {
    return <h1 style={{color: "red"}}>Hello, {name}</h1>
}

export default App;