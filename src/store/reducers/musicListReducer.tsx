import {
    FETCH_MUSIC_LIST_START,
    FETCH_MUSIC_LIST_SUCCESS,
    FETCH_MUSIC_LIST_FAILURE,
} from '../constants';

const initialState = {
    list: [],
    error: '',
    isLoading: false,
}

const musicListReducer = (state = initialState, action: any) => {
    const {
        type,
        data,
        error,
    } = action;

    switch (type) {
        case FETCH_MUSIC_LIST_START: {
            return {
                ...state,
                error: '',
                isLoading: true
            }
        }
        case FETCH_MUSIC_LIST_SUCCESS: {
            return {
                ...state,
                list: data,
                isLoading: false
            }
        }
        case FETCH_MUSIC_LIST_FAILURE: {
            return {
                ...state,
                error: error,
                isLoading: false
            }
        }
        default: {
            return state
        }
    }
}

export default musicListReducer