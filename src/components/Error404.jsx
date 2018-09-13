import React from 'react';

import Link from 'react-router-dom';





function Error404(){
  return(
    <div>
      <p>Whoops! Go back to <Link to="/">Home</Link></p>
    </div>
  );
}
export default Error404;
