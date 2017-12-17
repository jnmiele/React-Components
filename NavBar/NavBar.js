
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {	
	return(
		<div id='nav-bar'>
			<div id='nav-bar-left'>
				<div id='site-title'>
					<Link to='/'>/* site logo goes here */</Link>
				</div>
				<div className='nav-item'>
					{window.location.pathname === '/portfolio'? <Link className='nav-link-bold' to='/portfolio'>Portfolio</Link> : <Link className='nav-link' to='/portfolio'>Portfolio</Link>}
					// the line above changes the thickness of the text depending on what route is being rendered. Ensure '/route' matched Link
				</div>
				<div className='divider'></div>
				<div className='divider'></div>
				<div className='nav-item'>
					{window.location.pathname === '/aboutme'? <Link className='nav-link-bold' to='/aboutme'>About Me</Link> : <Link className='nav-link' to='/aboutme'>About Me</Link>}
				</div>
				<div className='divider'></div>
				<div className='divider'></div>
				<div className='nav-item'>
					{window.location.pathname === '/blog'? <Link className='nav-link-bold' to='/blog'>Blog</Link> : <Link className='nav-link' to='/blog'>Blog</Link>}
				</div>
			</div>

			<div className='nav-bar-right'> 
				<div className='nav-item'>
					<a className='social-media-icon' href='' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={} alt='linkedin'/>
					</a>
				</div>
				<div className='divider'></div>
				<div className='nav-item'>
					<a className='social-media-icon' href='' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={} alt='medium'/>
					</a>
				</div>
				<div className='divider'></div>
				<div className='nav-item'>
					<a className='social-media-icon' href='' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={} alt='github'/>
					</a>
				</div>
				<div className='divider'></div>
				<div className='nav-item'>
					<a className='social-media-icon' href='' target='_blank' rel="noopener noreferrer">
						<img className='social-media-icon' src={} alt='email'/>
					</a>
				</div>
			</div>
		</div>
	)
}
export default NavBar