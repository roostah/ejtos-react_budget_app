import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,totalExpenses,currency } = useContext(AppContext);

    const setBudget = (value) => {
        if(value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(value),
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    step='10'
                    min='0'
                    max='20000'
                    value={budget}
                    style={{ width: '8em'}}
                    onChange={(event) => setBudget(event.target.value)}>
                    </input>
            </span>
        </div>
    );
};
export default Budget;