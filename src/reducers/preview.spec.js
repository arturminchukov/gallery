import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import preview from './preview';

configure({ adapter: new Adapter });

describe('Reducer preview', () => {
    let originState;

    beforeEach(() => {
        originState = {
            picture_id: 1,
        };
    });

    it('preview if not state', () => {
        const expectedState = {
                loading: true,
                mode: false,
                picture_id: null,
            },
            newState = preview(null, {});
        expect(newState).toEqual(expectedState);
    });

    it('preview if not type action', () => {
        const expectedState = {
                ...originState,
            },
            newState = preview(originState, { type: null });
        expect(newState).toEqual(expectedState);
    });

    it('PREVIEW_SHOW', () => {
        const expectedState = {
                picture_id: 2,
                mode: true,
            },
            newState = preview(originState, {
                type: 'PREVIEW_SHOW',
                picture_id: 2,
            });
        expect(newState).toEqual(expectedState);
    });

    it('PREVIEW_EXIT', () => {
        const expectedState = {
                ...originState,
                mode: false,
            },
            newState = preview(originState, {
                type: 'PREVIEW_EXIT',
            });
        expect(newState).toEqual(expectedState);
    });

    it('PREVIEW_BACK', () => {
        const expectedState = {
                ...originState,
                picture_id: originState.picture_id - 1,
            },
            newState = preview(originState, {
                type: 'PREVIEW_BACK',
            });
        expect(newState).toEqual(expectedState);
    });

    it('PREVIEW_BACK if id=0', () => {
        const expectedState = {
                ...originState,
                picture_id: 0,
            },
            newState = preview({
                ...originState,
                picture_id: 0,
            }, {
                type: 'PREVIEW_BACK',
            });
        expect(newState).toEqual(expectedState);
    });

    it('PREVIEW_FORWARD', () => {
        const expectedState = {
                ...originState,
                picture_id: originState.picture_id + 1,
            },
            newState = preview(originState, {
                type: 'PREVIEW_FORWARD',
            });
        expect(newState).toEqual(expectedState);
    });
});
