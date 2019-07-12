import React, { Component } from 'react';
import './WaitingList.css';

class WaitingItem extends Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.entered !== this.props.entered;
	}

	render() {
		const { id, text, entered, onEnter, onLeave } = this.props;
		return (
			<li>
				<div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
				<div className="buttons">
					<button onClick={() => onEnter(id)}>enter</button>
					<button onClick={() => onLeave(id)}>leave</button>
				</div>
			</li>
		);
	}
}

const WaitingList = ({ input, waitingList, waitingActions }) => {
	return (
		<div className="WaitingList">
			<h2>WaitingList</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					waitingActions.create(input);
					waitingActions.changeInput('');
				}}
			>
				<input
					value={input}
					onChange={e => waitingActions.changeInput(e.target.value)}
				/>
				<button>go</button>
			</form>
			<ul>
				{waitingList.map(item => (
					<WaitingItem
						key={item.id}
						id={item.id}
						text={item.name}
						entered={item.entered}
						onEnter={waitingActions.enter}
						onLeave={waitingActions.leave}
					/>
				))}
			</ul>
		</div>
	);
};

export default WaitingList;
