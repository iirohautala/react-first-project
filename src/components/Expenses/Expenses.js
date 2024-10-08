import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        //console.log('Expenses.js');
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;