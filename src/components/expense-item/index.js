import React from 'react';
import ExpenseForm from '../expense-form'

export default class ExpenseItem extends React.Component {
  constructor(props){
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(){
    console.log(this.props.expense);
    this.props.expenseRemove(this.props.expense);
  }

  render(){
    return (
      <div className="expense-item">
        <h5>{this.props.expense.name}</h5>
        <p>${this.props.expense.cost}</p>
        <button onClick={this.handleRemove}>
          Delete
        </button>
        <ExpenseForm
          expense={this.props.expense}
          category={this.props.category}
          saveExpense={this.props.expenseUpdate}
          removeExpense={this.props.expenseRemove}
        />
      </div>
    );
  }
}
