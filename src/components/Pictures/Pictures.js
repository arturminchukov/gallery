import React from 'react';
import {Picture} from '../Picture/Picture';
import "./Pictures.css";
import fetchPictures from "../../actions/fetchPictures";
import {connect} from 'react-redux';
import {Preview} from '../Preview/Preview';
import {InfiniteScroll} from "../InfiniteScroll/InfiniteScroll";

const stateToProps = state => ({
    pictures: state.pictures.pictures,
    next:state.pictures.next,
    preview_mode: state.pictures.preview_mode,
    preview: state.preview
});

export const Pictures = connect(stateToProps)(
    class Pictures extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                loading: false
            };
            this.onClick = this.onClick.bind(this);
            this.fetchNext = this.props.dispatch.bind(this, fetchPictures());
        }

        componentDidMount() {
            document.addEventListener('click', this.onClick,);
        }

        componentWillUnmount() {
            document.removeEventListener('click', this.onClick);
        }

        onClick(picture) {
            if (!picture.target.id)
                return;
            this.props.dispatch({
                type: 'PREVIEW_SHOW',
                picture_id: parseInt(picture.target.id,10),
            })
        }

        render() {
            if (this.state.loading)
                return <div><h1>Loading</h1></div>;
            if (this.props.preview.mode)
                return (<React.Fragment>
                    <Preview picture={this.props.pictures[this.props.preview.picture_id]}/>
                    <div className="Pictures">{this.props.pictures.map((picture) => {
                        return <Picture picture={picture} type='collection'  key={picture.id}/>;
                    })}
                    </div>
                </React.Fragment>);
            let count = 0;
            return (
                <InfiniteScroll fetchNext={this.fetchNext} next='this.props.next'>
                    <div className="Pictures">{this.props.pictures.map((picture) => {
                        return <Picture picture={picture} type='collection' id={count++} key={picture.id}/>;
                    })}
                    </div>
                </InfiniteScroll>
            );
        }
    }
);