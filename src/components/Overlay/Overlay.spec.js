import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Overlay } from './Overlay.js';

configure({ adapter: new Adapter });

describe('<Preview />', () => {
    it('render preview with empty children', () => {
        let wrapper = shallow(<Overlay/>);
        expect(wrapper.find('.Overlay').length).toEqual(1);
    });
});