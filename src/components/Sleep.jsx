import React from 'react';
import PropTypes from 'prop-types';

function Sleep (props){
  return(
    <div>
      <p onClick={props.addSleep}>Sleep</p>

    </div>
  );
}

Sleep.propTypes = {
  addSleep: PropTypes.func
};

export default Sleep;
