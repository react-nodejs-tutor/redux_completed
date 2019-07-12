import React, { Component } from 'react';
import WaitingList from '../components/WaitingList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waitingActions from '../store/modules/waiting';

class WaitingListContainer extends Component {
	render() {
		const { input, list, waitingActions } = this.props;

		return (
			<WaitingList
				waitingList={list}
				input={input}
				waitingActions={waitingActions}
			/>
		);
	}
}

const mapStateToProps = state => ({
	input: state.waiting.input,
	list: state.waiting.list
});

const mapDispatchToProps = dispatch => ({
	waitingActions: bindActionCreators(waitingActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WaitingListContainer);
