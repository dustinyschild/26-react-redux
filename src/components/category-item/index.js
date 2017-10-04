require('./category-item.scss');
import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import * as categoryActions from '../../action/category-actions';
import * as expenseActions from '../../action/expense-actions';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="category-item">
        <h2>{this.props.category.title}</h2>
        {
          this.props.category.budget ?
            <p>${this.props.category.budget}</p> :
            <p>No budget set</p>
        }
        <button onClick={() => this.props.categoryRemove(this.props.category)}>Remove</button>
        <CategoryForm
          buttonText="Update"
          category={this.props.category}
          saveCategory={this.props.categoryUpdate}
        />
        <div className="expense-container">
          <ExpenseForm
            category={this.props.category}
            saveExpense={this.props.expenseCreate}
            buttonText="Add Expense"
          />
          <div className="expense-items-container">
            <h4>Expenses: </h4>
            {this.props.expenses.map(expense => {
              return (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  category={this.props.category}
                  saveExpense={this.props.expenseUpdate}
                  expenseRemove={this.props.expenseRemove}
                  buttonText="Update"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state,props) => ({expenses: state.expenses[props.category.id]});
let mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryActions.categoryUpdate(category)),
  categoryRemove: category => dispatch(categoryActions.categoryRemove(category)),
  expenseCreate: expense => dispatch(expenseActions.expenseCreate(expense)),
  expenseUpdate: expense => dispatch(expenseActions.expenseUpdate(expense)),
  expenseRemove: expense => dispatch(expenseActions.expenseRemove(expense)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem);
