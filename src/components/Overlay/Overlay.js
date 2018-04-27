import React from 'react';
import './Overlay.css';
import { ConnectedPreview } from '../Preview/Preview';

export function Overlay() {
    // let view = props.view ? props.view : '';
    return (
        <div className='Overlay'>
            {/*{view}*/}
            <ConnectedPreview />
        </div>
    );
}
