import  React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import {ConnectedPreview} from './Preview';
configure({ adapter: new Adapter });

describe('<Preview />', () => {
    const initialState = {
        preview: {
            picture_id: 0,
        },
        pictures: {
            pictures: [{
                images: {
                    ['480w_still']:{
                        width:400,
                        height:282,
                        url : 'https://www.decomarket24.cz/out/pictures/1/1870-1-embankment_.jpg',
                    }
                }
            }],
            number:1,
        }
    };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = render(<Provider store={store}><ConnectedPreview/></Provider>);
    });

    it('render preview', () => {
        expect(wrapper.find('img')[0].attribs.src).toMatch(initialState.pictures.pictures[0].images['480w_still'].url);
        expect(wrapper.find('button').length).toEqual(3);
        expect(wrapper[0].attribs.class).toMatch('Preview');
    });
});