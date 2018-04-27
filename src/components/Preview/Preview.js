import React from 'react';
import { Button } from '../Button/Button';
import { Picture } from '../Picture/Picture';
import fetchPictures from '../../actions/fetchPictures';
import { connect } from 'react-redux';
import './Preview.css';

const stateToProps = state => ({
    picture: state.pictures.pictures[state.preview.picture_id],
    preview_id: state.preview.picture_id,
    number: state.pictures.number,
});


export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(element) {
        switch (element.target.innerHTML) {
            case '&gt;':
                if (this.props.preview_id + 5 > this.props.number)
                    this.props.dispatch(fetchPictures());
                return this.props.dispatch({
                    type: 'PREVIEW_FORWARD',
                });
            case '&lt;':
                return this.props.dispatch({
                    type: 'PREVIEW_BACK',
                });
            case '×':
                return this.props.dispatch({
                    type: 'PREVIEW_EXIT'
                });
            default:
                return;
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClick);
    }

    render() {
        return (
            <div className='Preview'>
                <Button direction='Exit'/>
                <Button direction='Left'/>
                <Picture className='' picture={this.props.picture} type='preview'/>
                <Button direction='Right'/>
            </div>
        );
    }
}

export const ConnectedPreview = connect(stateToProps)(Preview);
