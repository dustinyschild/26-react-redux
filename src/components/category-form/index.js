import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({ title: '',budget: '' },props.category);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let { name,value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveCategory(Object.assign({},this.state));
    if(!this.props.category) this.setState({ title: '',budget: ''});
  }

  render(){
    return(
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label>$
          <input
            name='budget'
            type='number'
            placeholder='budget!'
            value={this.state.budget}
            onChange={this.handleChange}
          />
          <button type='submit'>
            {this.props.category ?
              'Update' :
              'Add Category'
            }
          </button>
        </label>
      </form>
    );
  }
}
