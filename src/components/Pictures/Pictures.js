import React from 'react';
import {Picture} from '../Picture/Picture';
import "./Pictures.css";

export class Pictures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: props.pictures,
            loading: false
        }
    }

    render() {
        let pictures = this.state.pictures ? this.state.pictures : [
            'https://wallbox.ru/resize/1920x1080/wallpapers/main/201125/efcf7f6d1590bc3a1e900e93c76e4c1e.jpg',
            'https://cdn.wallaps.com/wallpapers/120000/115241.jpg',
            'http://2d.by/wallpapers/f/fraktal_shtorm.jpg',
            'https://cdn.wallaps.com/wallpapers/110000/101200.jpg',
            'http://clipart-design.ru/files/ftp/backgrounds/abstract/000092_space_abstract_back.jpg',
            'https://get.wallhere.com/photo/lights-digital-art-flowers-purple-fireworks-light-flower-petal-1920x1080-px-computer-wallpaper-fractal-art-567748.jpg',
            'http://content.podarki.ru/goods-images/0ac7b439-543c-4e8b-a7d7-02f3ff36f255.jpg',
            'https://w-dog.ru/wallpapers/15/3/437850330584583/lev-cvetnoj-vzglyad.jpg',
            'http://leonidkayum.ru/wp-content/uploads/2016/10/zhenshhina-raduga.jpg',
            'http://st-gdefon.gallery.world/wallpapers_original/591495_gallery.world.jpg',
            'http://strongprint.ru/images/phocagallery/faktury_i_tekstury/steklo/0005807.jpg',
            'http://ldcsites.com/demo/c-rouxacademy-com/images/art/LaVonne_LaRue.jpg',
            'https://www.secretenergy.com/wp-content/uploads/2016/09/dmt.jpg',
            'https://s-i.huffpost.com/gen/1574293/images/o-BRAIN-EYE-facebook.jpg',
            'http://cdn.promodj.com/afs/cdb2bfc5d384e08028a27f321daca50a12:resize:2000x2000:same:0e731e',
            'http://store-i.gipsynet.com/big/03/163db04fea3059e17608ffdfedc689.jpg',
            'https://www.queeky.com/static/img/32/324523/source.jpg',
            'http://st-gdefon.gallery.world/wallpapers_original/662126_gallery.world.jpg',
            'http://oboi-na-stol.com/pub/styles/page_preview/public/original_images/oboi-na-stol.com-80313-rendering-abstrakciya-goluboy-belyy-oboi.jpg',
            'http://w1.wallls.com/uploads/original/201601/29/wallls.com_52871.jpg',
            'http://www.1366x768.net/large/201201/8115.jpg',
            'https://f.vividscreen.info/soft/2047ee46eaacf325adfd8ad7782e5f2a/Lava-320x320.jpg',
            'http://i1.sndcdn.com/artworks-000129226285-lu0mkr-t500x500.jpg',
            'http://images.1ipadairwallpaper.com/Gallery/11_Abstracts/1-ipad-air-wallpaper-abstract_90.jpg',
            'https://s1.1zoom.ru/big3/555/387389-blackangel.jpg',
            'http://startlingfecundity.com/location/image/full/GIF12PMQ5121D68.png',
            'http://i.imgur.com/FxCPgFN.png',
            'http://i.photoblogs.ru/20150401/46917950083004_great_chasm_by_jbrown67-d5jgw01.jpg',
            'https://www.keramnsk.ru/files/pics/product/24126-blumarine-1-chast.jpeg',
            'https://i.chzbgr.com/original/8820794624/h9F8BD201/',
            'http://oboi.cc/uploads/11_05_2013/view/201210/oboik.ru_52662.jpg',
            'http://oboi.cc/1366-768-100-uploads/new/big/oboik.ru_48547.jpg',
            'https://img2.goodfon.ru/original/1920x1080/e/9c/linii-svet-oboi-4656.jpg',
            'https://grandgames.net/puzzle/full/abstraktsiya_spiral.jpg',
            'http://www.zastavki.com/pictures/1920x1200/2011/3D-graphics_Flower_abstraction_032885_.jpg',
        ];

        if (this.state.loading)
            return <div><h1>Loading</h1></div>;
        return (
            <div className="Pictures">{pictures.map((picture) => {
                return <Picture url={picture} type='collection' key={picture}/>;
            })}
            </div>
        );
    }
}
