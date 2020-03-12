import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

	render() {
		return (
			<div className="NavBar">
				<h4 className="navbarlinks"><Link to='/'>Home</Link></h4>
				<h4 className="navbarlinks"><Link to='/posts'>Posts</Link></h4>
				<h4 className="navbarlinks"><Link to='/contact'>Contact</Link></h4>
				<h4 className="navbarlinks"><Link to='/addpost'>Dodaj Post</Link></h4>
			</div>
		);
	}
}

export default NavBar;