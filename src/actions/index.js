import {ADD_CONTRIBUTION, ADD_GOAL, REMOVE_GOAL} from '../constants/actionTypes';

export const addContribution = (name, value) => {
    return {
        type: ADD_GOAL,
        payload: {
            name: {
                contribution: value
            }
        }
    }
};

export const addGoal = (name = 'Brokerage', limit = 50000) => {
    return {
        type: ADD_CONTRIBUTION,
        payload: {
            [name]: {
                contribution: 0,
                limit: limit
            }
        }
    }
};

export const removeGoal = (name = 'Brokerage') => {
    return {
        type: REMOVE_GOAL,
        payload: {
            name
        }
    }
};
