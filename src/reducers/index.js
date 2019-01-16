import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReducer';

// const songsReducer = () => {
//     return [
//         { title: 'Bailamose', duration: '2:45' },
//         { title: 'Macrena', duration: '1:30' },
//         { title: 'Rithme divine', duration: '3:45' },
//         { title: 'Bilando', duration: '2:45' }
//     ];
// };

// const selectedSongReducer = (selectedSong = null, action) => {
//     if (action.type === 'SONG_SELECTED') {
//         return action.payload;
//     } 

//     return selectedSong;
// };

export default combineReducers({
    posts: postReducer,
    users: usersReducer
});