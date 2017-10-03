require('./category-item.scss');
import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form';
import * as actions from '../../action/category-actions';

const CategoryItem = ({ category,categoryUpdate,categoryRemove }) => {
  return(
    <div className="category-item">
      <h2>{category.title}</h2>
      {
        category.budget ?
          <p>${category.budget}</p> :
          <p>No budget set</p>
      }
      <button onClick={() => categoryRemove(category)}>Remove</button>
      <CategoryForm
        buttonText="Update"
        category={category}
        saveCategory={categoryUpdate}
      />
    </div>
  );
};

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(actions.categoryUpdate(category)),
  categoryRemove: category => dispatch(actions.categoryRemove(category)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem);
