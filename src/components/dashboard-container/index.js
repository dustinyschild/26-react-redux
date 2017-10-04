import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action/category-actions';

import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  render(){
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText="Add Category"
          saveCategory={this.props.categoryCreate}
        />
        <div className="categories-container">
          <h2>Categories:</h2>
          {this.props.categories.map(cat =>{
            return (
              <CategoryItem
                key={cat.id}
                category={cat}
              />
            );
          }
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => dispatch(actions.categoryCreate(category)),
    categoryUpdate: category => dispatch(actions.categoryUpdate(category)),
    categoryRemove: category => dispatch(actions.categoryRemove(category)),
  };
};

const connecter = connect(mapStateToProps,mapDispatchToProps);
export default connecter(DashboardContainer);
