import React from 'react';
import getExpenseTotal from '../selectors/expense-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpenseSummary = (props) => {
    const expenseTotal = getExpenseTotal(props.expenses);
    const expenseCount = props.expenses.length;
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal/100).format('$0,000.00');
    return (
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseSummary);