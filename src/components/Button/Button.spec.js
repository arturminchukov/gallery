import React from 'react';
import {configure, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from './Button.js';

configure({ adapter: new Adapter });

describe('<Button />', () => {
    it('renders one <button />', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.length).toEqual(1);
    });

    it('render button', () =>{
        const wrapper = shallow(<Button direction='Right'/>);
        expect(wrapper.find('button').exists()).toEqual(true);
    });

    it('render left button', () =>{
        const wrapper = render(<Button direction='Left'/>);
        expect(wrapper.find('button')._root[0].children[0].data).toMatch('<');
    });

    it('render right button', () =>{
        const wrapper = render(<Button direction='Right'/>);
        expect(wrapper.find('button')._root[0].children[0].data).toMatch('>');
    });

    it('render Exit button', () =>{
        const wrapper = render(<Button direction='Exit'/>);
        expect(wrapper.find('button')._root[0].children[0].data).toMatch('×');
    });

    it('render default button', () =>{
        const wrapper = render(<Button/>);
        expect(wrapper.find('button')._root[0].children[0].data).toMatch('×');
    });
});