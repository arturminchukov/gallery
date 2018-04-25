require('babel-register')();
let jsdom = require('jsdom');
const { JSDOM } = jsdom;
let exposedProperties = ['window', 'navigator', 'document'];
global.window = new JSDOM(`...`).window;
global.document = global.window.document;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});
global.navigator = {
    userAgent: 'node.js'
};
documentRef = document;