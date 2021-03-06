import React from 'react';
import './Button.css';

/**
 * Отрисовывает кнопку
 *
 * аттрибут direction:
 *  Left - кнопка "Влево"
 *  Right - кнопка "Вправо"
 *  по умолчанию:
 *    Exit - кнопка выхода
 */
export function Button(props) {
    const direction = `Button_${props.direction}`;
    let directionSymbol;
    if (props.direction === 'Left')
        directionSymbol = '<';
    else if (props.direction === 'Right')
        directionSymbol = '>';
    else
        directionSymbol = <React.Fragment>&times;</React.Fragment>;
    return (
        <button className={`Button ${direction}`}>{directionSymbol}</button>
    );
}
