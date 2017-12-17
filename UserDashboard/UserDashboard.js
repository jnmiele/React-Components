import React from 'react'

import DashboardContent from './DashboardContent'
import DashboardMenu from './DashboardMenu'

class UserDashboard extends React.Component {
	state = {
		currentTab: ''
	}

	changeTab = (tab) => {
		this.setState({
			currentTab: tab
		})
	}

	render() {
		return (
			<div id='user-dashboard'>
				<DashboardMenu changeTab={this.changeTab} />
				<DashboardContent currentTab={this.state.currentTab} />
			</div>
		)
	}
}

export default UserDashboard