import React from 'react';
import PropTypes from 'prop-types';



function Activity(props){
  return(
    <div>
      <p onClick={props.addActivity}>Activity</p>
    </div>

  );
}

Activity.propTypes = {
  addActivity: PropTypes.func
};

export default Activity;
