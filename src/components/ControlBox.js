import React from 'react';
import CapitalizeFirstLetter from '../service/CapitalizeFirstLetter';
import './styles/ControlBox.css';
import {ReactComponent as Increase} from '../assets/plus.svg';
import {ReactComponent as Decrease} from '../assets/minus.svg';

export default function ControlBox({name, level, min, max, units}) {

  const filling = {
    maxHeight: level + '%'
  }

  return (
    <div id="container">
      <div id="header">
        <span>{CapitalizeFirstLetter(name)}</span>
        <span>{level}{' ' + CapitalizeFirstLetter(units)}</span>
      </div>
      <div id="content">
        <div id="figure">
          <div id="figure-bar" style={filling}>

          </div>
        </div>
        <div id="controls">
          <p className="controller first">
            <Increase className="increase" width={'2.5rem'} height={'2.5rem'} fill={'rgba(0,255,0,0.4)'} />
          </p>
          <p className="controller second">
            <Decrease className="decrease" width={'2.5rem'} height={'2.5rem'} fill={'rgba(150,150,150,0.4)'}/>
          </p>
        </div>
      </div>
    </div>
  );
}
