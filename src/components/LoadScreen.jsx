import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadScreen() {

    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh'}}>
          <CircularProgress />
      </div>
    );
  }
  
export default LoadScreen;
  