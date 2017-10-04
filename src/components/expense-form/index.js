import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    let { id } = props.category;
    this.state = {
      categoryId: id,
      name: '',
      cost: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let { name,value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveExpense(this.state);
  }

  render(){
    return (
      <div className="expense-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Expense"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            name="cost"
            type="number"
            placeholder="cost"
            value={this.state.cost}
            onChange={this.handleChange}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
