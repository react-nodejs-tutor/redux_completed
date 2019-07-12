import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

let id = 1;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, name => ({ name, id: id++ }));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

const initialState = {
	input: '',
	list: []
};

export default handleActions(
	{
		[CHANGE_INPUT]: (state, action) => ({
			...state,
			input: action.payload
		}),

		[CREATE]: (state, action) => ({
			...state,
			list: state.list.concat({
				id: action.payload.id,
				name: action.payload.name,
				entered: false
			})
		}),

		[ENTER]: (state, action) => ({
			...state,
			list: state.list.map(item =>
				item.id === action.payload
					? { ...item, entered: !item.entered }
					: item
			)
		}),

		[LEAVE]: (state, action) => ({
			...state,
			list: state.list.filter(item => item.id !== action.payload)
		})
	},
	initialState
);
