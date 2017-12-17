import React from 'react'

const DashboardMenu = (props) => {

	function handleClick(e) {
		const tab = e.target.dataset.id
		switch (tab) {
			case 'projects':
				return props.changeTab(tab)
			case 'requestWork':
				return props.changeTab(tab)
			case 'completeProject':
				return props.changeTab(tab)
			case 'messages':
				return props.changeTab(tab)
			default:
				return null
		}
	}

	return (
		<div id='dashboard-menu' onClick={handleClick} >
			<div data-id='projects' className='dashboard-header'>
				<h3>Recent and Active Projects</h3>
			</div>
			<div data-id='requestWork' className='dashboard-header'>
				<h3>Request Work</h3>
			</div>
			<div data-id='completeProject' className='dashboard-header'>
				<h3>Complete Project</h3>
			</div>
			<div data-id='messages' className='dashboard-header'>
				<h3>Messages</h3>
			</div>
		</div>
	)
}

export default DashboardMenu