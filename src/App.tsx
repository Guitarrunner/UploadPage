import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
function App(){
    return (
        <>
        <div className="header">
        <img src="Upload.jpg"/>
        <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Courses</a>
            <a href="#contact">Unit</a>
            <a href="#about">Blog</a>
        </div>
</div>

        <h1>Hello World</h1>
            <Router>
                <Routes></Routes>
            </Router>
        </>
    )
}

export default App;