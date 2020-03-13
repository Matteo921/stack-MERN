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