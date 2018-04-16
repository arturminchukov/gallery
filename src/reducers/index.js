import { combineReducers } from 'redux';
import pictures from './pictures';
import preview from './preview';

export default combineReducers({
    pictures,
    preview
});
