import React from 'react';
import './Picture.css';

export class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            picture: "loading",
            loading: true
        }
    }

    render() {
        if (!this.state.loading && this.props.type === 'collection') {
            let ratio = this.state.size ? Math.ceil((this.state.size.width / this.state.size.height) * 16) : '';
            return (<div className={"Picture__item "} style={{
                    gridColumn: "span " + ratio
                }}>
                    <img className="Picture__image_collection" src={this.state.picture.src} alt="Изображение"/>
                </div>
            );
        }

        if (!this.state.loading && this.props.type === 'preview') {
            let imageRatio = this.state.size ? (this.state.size.width / this.state.size.height) : '',
                screenRatio = window.screen.width / window.screen.height,
                width = 'auto',
                height = 'auto';

            if (imageRatio >= screenRatio)
                width = '100%';
            else
                height = '100%';

            return <img src={this.state.picture.src} alt="Изображение" style={{
                width: width,
                height: height
            }}/>;
        }

        let url = this.state.url,
            image = new Image(),
            pic = this;

        image.addEventListener('load', function () {
            let size = {
                height: image.naturalHeight,
                width: image.naturalWidth
            };
            console.log(size.height + "x" + size.width);
            pic.setState({
                loading: false,
                picture: image,
                size: size
            });
        }, false);
        image.src = url;

        return <p>loading</p>;
    }
}
