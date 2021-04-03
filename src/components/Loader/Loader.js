import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.css';

function Loader() {
  return(
    <div className="loader-container">
      <CircularProgress size={50}/>
    </div>
  );
};

export default Loader;