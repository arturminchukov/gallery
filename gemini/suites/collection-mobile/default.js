const DEFAULT_PICTURES = [{
    images: {
        '480w_still': {
            width: 400,
            height: 282,
            url: 'https://www.decomarket24.cz/out/pictures/1/1870-1-embankment_.jpg',
        }
    },
    id: 'https://www.decomarket24.cz/out/pictures/1/1870-1-embankment_.jpg',
}, {
    images: {
        '480w_still': {
            width: 640,
            height: 480,
            url: 'http://www.kartinkijane.ru/pic/201305/640x480/kartinkijane.ru-29492.jpg',
        }
    },
    id: 'http://www.kartinkijane.ru/pic/201305/640x480/kartinkijane.ru-29492.jpg'
}, {
    images: {
        '480w_still': {
            width: 480,
            height: 640,
            url: 'http://javasea.ru/uploads/posts/2014-01/1390836413_krasochnaya-abstrakciya-devushki.jpg',
        }
    },
    id: 'http://javasea.ru/uploads/posts/2014-01/1390836413_krasochnaya-abstrakciya-devushki.jpg',
}, {
    images: {
        '480w_still': {
            width: 500,
            height: 375,
            url: 'http://kartinki.moy.su/kartinki/abstraktsiya/abstrakcija_dym.jpg',
        }
    },
    id: 'http://kartinki.moy.su/kartinki/abstraktsiya/abstrakcija_dym.jpg',
}, {
    images: {
        '480w_still': {
            width: 500,
            height: 312,
            url: 'http://sarrest.ru/wp-content/uploads/2014/11/ViJysB9MOM.jpg',
        }
    },
    id: 'http://sarrest.ru/wp-content/uploads/2014/11/ViJysB9MOM.jpg',
}, {
    images: {
        '480w_still': {
            width: 600,
            height: 338,
            url: 'https://i.7fon.org/thumb/s203950.jpg',
        }
    },
    id: 'https://i.7fon.org/thumb/s203950.jpg',
}, {
    images: {
        '480w_still': {
            width: 685,
            height: 465,
            url: 'http://allfons.ru/large/201112/1803.jpg',
        }
    },
    id: 'http://allfons.ru/large/201112/1803.jpg',
}, {
    images: {
        '480w_still': {
            width: 648,
            height: 365,
            url: 'http://fonday.ru/images/tmp/14/9/648x365/14994IQabVOALcSldUkvygJMpfWz.jpg',
        }
    },
    id: 'http://fonday.ru/images/tmp/14/9/648x365/14994IQabVOALcSldUkvygJMpfWz.jpg',
}, {
    images: {
        '480w_still': {
            width: 650,
            height: 414,
            url: 'http://wallpaper.getwall.ru/2/preview/2409.jpg',
        }
    },
    id: 'http://wallpaper.getwall.ru/2/preview/2409.jpg',
}, {
    images: {
        '480w_still': {
            width: 521,
            height: 325,
            url: 'http://www.platinumwall.ru/wallpapers/tn_big/platinumwall.ru_201011301040461447.jpg',
        }
    },
    id: 'http://www.platinumwall.ru/wallpapers/tn_big/platinumwall.ru_201011301040461447.jpg',
}];

module.exports = [{
    block: 'components/Pictures/Pictures.js',
    props: {
        pictures: DEFAULT_PICTURES,
        next: null,
        preview_mode: false,
        preview:{
            mode:false,
        }
    }
}
];