import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
	render() {
		const { color, number, increment, decrement } = this.props;

		return (
			<Counter
				value={number}
				color={color}
				onIncrement={increment}
				onDecrement={decrement}
			/>
		);
	}
}

const mapStateToProps = state => ({
	color: state.counter.color,
	number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(increment()),
	decrement: () => dispatch(decrement())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterContainer);
