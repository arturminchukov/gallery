const DEFAULT_PICTURE = {
    images: {
        '480w_still': {
            width: 640,
            height: 480,
            url: 'http://www.kartinkijane.ru/pic/201305/640x480/kartinkijane.ru-29492.jpg',
        }
    },
    id: 'http://www.kartinkijane.ru/pic/201305/640x480/kartinkijane.ru-29492.jpg'
};

module.exports = [{
    block: 'components/Preview/Preview.js',
    props: {
        picture: DEFAULT_PICTURE,
        preview_id: 1,
        number: 10,
        preview_mode: false,
        preview: {
            mode: false,
        }
    }
}
];