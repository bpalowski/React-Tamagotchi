import React from 'react';
import PropTypes from 'prop-types';

function Food(props){
  return(
    <div>
      <p onClick={props.addFood}>Food</p>
    </div>
  );
}

Food.propTypes = {
  addFood: PropTypes.func
};
export default Food;
