import React from 'react';
import './Picture.css';

export class Picture extends React.Component {

    getPictureHref(picture) {
        const width = window.screen.width;
        if (width > 4000)
            return picture && picture.img && (picture.img.orig || picture.img.XXXL);
        else if (width > 2000)
            return picture && picture.img && (picture.img.XXXL || picture.img.XXL);
        else if (width > 1000)
            return picture && picture.img && (picture.img.XXL || picture.img.XL);
        else
            return picture && picture.img && (picture.img.XL || picture.img.L)
    }


    render() {
        if (this.props.type === 'collection') {
            return (<div className={"Picture__item "} style={{
                    height: this.props.height,
                    width: this.props.width
                }}>
                    <img className="Picture__image_collection" id={this.props.id} src={this.props.src}
                         alt="Изображение"/>
                </div>
            );
        }

        if (this.props.type === 'preview') {
            const { width, height, href } = this.getPictureHref(this.props.picture);
            let imageRatio = width / height,
                screenRatio = window.screen.width / window.screen.height,
                widthProperty = 'auto',
                heightProperty = 'auto';

            if (imageRatio >= screenRatio)
                widthProperty = '100%';
            else
                heightProperty = '100%';

            return <img src={href} alt="Изображение" style={{
                width: widthProperty,
                height: heightProperty
            }}/>;
        }
    }
}
