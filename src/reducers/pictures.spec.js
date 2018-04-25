import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import pictures from './pictures';

configure({ adapter: new Adapter });

describe('Reducer pictures', () => {
    let originState;

    beforeEach(() => {
        originState = {
            pictures: [],
            next: 0,
            loading: true,
            preview_mode: false,
            preview_image: null,
            number: 0,
        };
    });

    it('PICTURES_LOADING ', () => {
        const expectedState = {
                ...originState,
                loading: false,
            },
            newState = pictures(originState, {
                type: 'PICTURES_LOADING',
                loading: false,
            });
        expect(newState).toEqual(expectedState);
    });

    it('PICTURES_LOADED ', () => {
        const expectedState = {
                ...originState,
                pictures: [1],
                next: 1,
                number: 1,
            },
            newState = pictures(originState, {
                type: 'PICTURES_LOADED',
                pictures: [1],
                next: 1,
                number: 1,
            });
        expect(newState).toEqual(expectedState);
    });

    it('PICTURES_LOAD_ERROR ', () => {
        const expectedState = {
                ...originState,
                error: 'error'
            },
            newState = pictures(originState, {
                type: 'PICTURES_LOAD_ERROR',
                error:'error'
            });
        expect(newState).toEqual(expectedState);
    });

    it('picture reducer without type action ', () => {
        const expectedState = {
                ...originState,
            },
            newState = pictures(originState, {
                type: null,
            });
        expect(newState).toEqual(expectedState);
    });

    it('picture reducer without state', () => {
        const expectedState = {
                pictures: [],
                next: 0,
                loading: true,
                preview_mode: false,
                preview_image: null,
                number: 0,
            },
            newState = pictures(null, {
                type: null,
            });
        expect(newState).toEqual(expectedState);
    });
});