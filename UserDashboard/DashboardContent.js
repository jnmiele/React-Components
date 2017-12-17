import React from 'react'
import MessageList from './MessageList'
// import ProjectsList from './ProjectsList'

const DashboardContent = (props) => {
	
	function renderContent() {
		switch (props.currentTab) {
			/* 
			Example: 
			case 'projects':
				return <ProjectsList /> 
			*/
			case '':
				return 
			case '':
				return 
			case 'messages':
				return <MessageList />
			default:
				return <MessageList />
		}
	}
	return (
		<div id='dashboard-content'>
			{renderContent()}
		</div>
	)
}

export default DashboardContent