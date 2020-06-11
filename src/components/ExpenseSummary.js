import React from 'react';
import getExpenseTotal from '../selectors/expense-total';
import { connect } from 'react-redux';

const ExpenseSummary = (props) => {
    const expenseTotal = getExpenseTotal(props.expenses);
    const expenseCount = props.expenses.length;
    return (
        <div>
        <p>Viewing ${expenseCount} expenses totalling ${expenseTotal/100}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseSummary);