import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({ title: ''},props.category);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let { name,value } = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.props.update){
      this.props.updateCategory()
    } else {
      this.props.saveCategory(Object.assign({},this.state));
    }
    this.setState({ title: '' });
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
      </form>
    );
  }
}
