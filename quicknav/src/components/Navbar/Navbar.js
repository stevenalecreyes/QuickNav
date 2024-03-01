import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

	return (
		<div className='navbar'>
			<div>
				<p>Zesty</p>
			</div>
			<ul className="nav-menu">
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='About'>About</NavLink></li> 
			</ul>

		</div>
		)
}