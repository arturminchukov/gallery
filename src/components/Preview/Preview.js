import React from 'react';
import {Overlay} from '../Overlay/Overlay';
import {Button} from '../Button/Button';
import {Picture} from '../Picture/Picture';
import './Preview.css';

export class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: props.picture
        }
    }

    render() {
        const view = <div className='Preview'>
            <Button direction='Exit'/>
            <Button direction='Left'/>
            <Picture className='' url={this.state.picture} type='preview'/>
            <Button direction='Right'/>
        </div>;
        return (
            <Overlay view={view}/>
        );
    }
}
