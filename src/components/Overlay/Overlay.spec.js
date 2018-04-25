import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Overlay } from './Overlay.js';

configure({ adapter: new Adapter });

describe('<Preview />', () => {
    it('render preview with Hello children', () => {
        const view = <p>Hello</p>,
            wrapper = render(<Overlay view={view}/>);
        expect(wrapper.find('p')[0].children[0].data).toMatch('Hello');
        expect(wrapper.find('p')[0].parent.attribs.class).toMatch('Overlay');
    });

    it('render preview with empty children', () => {
        const wrapper = render(<Overlay/>);
        expect(wrapper.find('div')._root[0].children).toEqual([]);
        expect(wrapper.find('div')._root[0].attribs.class).toMatch('Overlay');
    });
});