/* SELECTORS */
export const getPosts = ({ posts }) => posts;
/* ACTIONS */


//action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* Initial State */

const initialState = [];

/* Reducer */

export default function reducer(statePart = initialState, action = {}) {
	switch (action.type) {
		case LOAD_POSTS:
			return [ ...action.payload ];
		default:
			return statePart;
	}
};

/* THUNKS */
export const loadPostsRequest = () => {
	return dispatch => {

		console.log('Request started...');
		setTimeout(() => {
			const arr = [{ id: 'a3fssdc1', title: 'test', content:'Lorem Ipsum'}];
			dispatch(loadPosts(arr));
			console.log('request finished after 2sec!');
		}, 2000);
	};
};
export const LOAD_POSTS = createActionName('LOAD_POSTS');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS});
