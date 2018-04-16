const preview = (state, action) => {
    if (!state) {
        return {
            loading: true,
            mode: false,
            picture_id: null,
        };
    }
    switch (action.type) {
        case 'PREVIEW_SHOW':
            return {
                ...state,
                mode: true,
                picture_id: action.picture_id,
            };
        case 'PREVIEW_EXIT':
            return {
                ...state,
                mode: false,
            };
        case 'PREVIEW_BACK':
            if (state.picture_id === 0)
                return state;
            return {
                ...state,
                picture_id: state.picture_id - 1,
            };
        case 'PREVIEW_FORWARD':
            return {
                ...state,
                picture_id: state.picture_id + 1,
            };
        default:
            return state;
    }
};

export default preview;

