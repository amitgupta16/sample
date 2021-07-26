import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CylForce from './cylForce';
import Cord from './cord';
import LeakRate from './leakRate';
import Cp from './cp';

ReactDOM.render(
  <div >
    <h2>Tool-Box</h2>
    <div className="flex-container" > 
      <div>
        <CylForce />
      </div>
      <div>
        <LeakRate />
      </div>
    </div>
    <div className="flex-container">  
       <div>
      <Cord />
    </div>
    <div>
      <Cp/>
    </div> 
    </div>       
  </div>,
  document.getElementById('root')
);