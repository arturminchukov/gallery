import React from 'react';
import './Overlay.css';

export function Overlay(props) {
    let view = props.view;
    if (!props)
        view = '';
    return (
        <div className="Overlay">
            {view}
        </div>
    );
}
