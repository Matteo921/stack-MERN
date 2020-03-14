import React, { Component } from 'react';

class PostsCounter extends Component {

	render() {
		const {posts} = this.props;

		if (posts){
			return (
				<div>
					Posts amount: { posts }
				</div>
			);
		}
			return (
				<div>
					<p>No posts to show. Try again.</p>
				</div>
			)
	}
};

export default PostsCounter;