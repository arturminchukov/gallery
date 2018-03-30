import React from 'react';
import './Button.css';

export function Button(props) {
    const direction = 'Button_' + props.direction;
    let directionSymbol;
    if (props.direction === 'Left')
        directionSymbol = '<';
    else if (props.direction === 'Right')
        directionSymbol = '>';
    else
        directionSymbol = <React.Fragment>&times;</React.Fragment>;
    return (
        <button className={'Button ' + direction}>{directionSymbol}</button>
    );
}
