import React from 'react';
import './ProgressBar.css';

export default function ProgressBar({name, contributionLimit, progressAmount}) {
    const percentage = (progressAmount / contributionLimit) * 100;

    return (
        <>
            <h1>{name}</h1>
            <div className='ProgressBar-container'>
                <div className='ProgressBar-progress' style={{width: `${percentage}%`}}>
                    <p className='ProgressBar-text' >${progressAmount} / ${contributionLimit}</p>
                </div>
            </div>
        </>
    );
}
