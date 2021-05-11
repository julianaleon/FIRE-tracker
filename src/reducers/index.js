import {ADD_CONTRIBUTION, ADD_GOAL} from '../constants/actionTypes';

const initialState = {
    goals: {
        '401k': {
            contribution: 6285,
            limit: 19500
        },
        'Roth IRA': {
            contribution: 0,
            limit: 6000
        }
    }
};

const goalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOAL:
            return (state.goals = action.payload);
        case ADD_CONTRIBUTION:
            return {...state, ...action.payload};
        default:
            return state;
    }
};


export default goalReducer;
