import React, {useState} from 'react';
import ProgressBar from '../ProgressBar';
import {useDispatch, useSelector} from 'react-redux';
import {addContribution, addGoal, removeGoal} from '../../actions/index';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './GoalProgress.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function GoalProgress(){
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [goalName, setGoalName] = useState(null);
    const [contributionAmount, setContributionAmount] = useState(null);
    const [contributionLimit, setContributionLimit] = useState(null);
    const goals = useSelector(state => state.goals);
    const classes = useStyles();

    // useDispatch hook gives us the store's dispatch method
    const dispatch = useDispatch();

    const handleAddGoal = () => {
        console.log('add goal');
        dispatch(addGoal(goalName, contributionLimit));
    };

    const handleRemoveGoal = () => {
        console.log('remove goal');
        dispatch(removeGoal(goalName));
    };

    const handleAddContribution = () => {
        console.log('add contribution');
        dispatch(addContribution(selectedGoal, contributionAmount));
        // dispatch(addContribution());
    }

    const handleSelectChange = (event) => {
        setSelectedGoal(event.target.value);
    };


    const goalKeys = Object.keys(goals);

    const allGoals = goalKeys.map((key, i) => {
        console.log(goals[key]);
        return (
            <ProgressBar key={i} name={key} contributionLimit={goals[key].limit} progressAmount={goals[key].contribution} />
        )
    });

    const goalOptions = goalKeys.map((key, i) => {
        return (
            <MenuItem value={key}>{key}</MenuItem>
        )
    });

    return (
        <div className="GoalProgress-body">
            {allGoals}
            <div className='input-row'>
                <TextField id="outlined-basic" label="Goal Name" variant="outlined" onChange={event => setGoalName(event.target.value)} value={goalName}/>
                <TextField id="outlined-basic" label="Goal Amount" variant="outlined" onChange={event => setContributionLimit(event.target.value)} value={contributionLimit}/>
                <button className='GoalProgress-button' onClick={handleAddGoal}>{'Add Goal'}</button>
                <button className='GoalProgress-button' onClick={handleRemoveGoal}>{'Remove Goal'}</button>
            </div>
            <div className='input-row'>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="select-label">Goal</InputLabel>
                    <Select
                      labelId="select-label"
                      id="goal-select"
                      value={selectedGoal}
                      onChange={handleSelectChange}
                      label="Goal"
                    >
                        {goalOptions}
                    </Select>
                </FormControl>
                <TextField id="outlined-basic" label="Amount Added" variant="outlined" onChange={event => setContributionAmount(event.target.value)} value={contributionAmount}/>
                <button className='GoalProgress-button' onClick={handleAddContribution}>{'Update Contributions'}</button>
            </div>
        </div>
    );
}
