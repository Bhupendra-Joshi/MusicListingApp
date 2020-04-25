import {
    FETCH_MUSIC_LIST_START,
    FETCH_MUSIC_LIST_SUCCESS,
    FETCH_MUSIC_LIST_FAILURE,
} from '../constants';
import fetchRequest from '../../utils/network';

const musicListStart = () => ({
    type: FETCH_MUSIC_LIST_START,
})

const musicListSuccess = (data) => ({
    type: FETCH_MUSIC_LIST_SUCCESS,
    data,
})

const musicListFailure = (error: string) => ({
    type: FETCH_MUSIC_LIST_FAILURE,
    error
})

export const fetchMusicList = () => dispatch => {
    dispatch(musicListStart());
    fetchRequest('https://itunes.apple.com/search?term=Michael+jackson',
        {
            onSuccess: (data: any) => {
                dispatch(musicListSuccess(data.results));
            },
            onFailure: (error: string) => {
                dispatch(musicListFailure(error));
            }
        });
}