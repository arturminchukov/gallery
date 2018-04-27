import React from 'react';
import { ConnectedPictures } from '../Pictures/Pictures';
import { Gemini } from '../Gemini/Gemini';
import './Gallery.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export function Gallery() {
    return (<Router>
        <div>
            <Route path='/gemini-test' component={Gemini}/>
            <Route exact path='/' component={ConnectedPictures}/>
        </div>
    </Router>)
}