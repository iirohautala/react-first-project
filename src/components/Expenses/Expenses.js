import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        //console.log('Expenses.js');
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;