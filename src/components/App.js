import {useState} from 'react';
import '../App.css';
import Dashboard from "./Dashboard";
import Wallpaper from '../background.jpg';

function App() {

  const getRandomLevel = () => (Math.random() * 50 + 15).toFixed(2);
  console.log(getRandomLevel());

  const [oxygen, setOxygen] = useState(getRandomLevel);
  const [nitrogen, setNitrogen] = useState(getRandomLevel);
  const [co2, setCo2] = useState(getRandomLevel);

  const [depth, setDepth] = useState(getRandomLevel);
  const [tempInside, setTempInside] = useState(getRandomLevel);
  const [speed, setSpeed] = useState(getRandomLevel);

  const [pressure, setPressure] = useState(getRandomLevel);
  const [tempOutside, setTempOutside] = useState(getRandomLevel);
  const [tiltAngle, setTiltAngle] = useState(getRandomLevel);

  class Measure {
    constructor(name, level, min, max, units) {
      this.name = name;
      this.level = level;
      this.min = min;
      this.max = max;
      this.units = units;
    }
  }

  return (
    <>
      <img src={Wallpaper} className="wallpaper" alt="submarine"/>
      <div className="App">
        <Dashboard title={'elements'}
                   fields={[new Measure('Oxygen', oxygen, 0, 100, '%'), new Measure('nitrogen', nitrogen, 0, 50, 'mmol/L'), new Measure('co2', co2, 0, 800, 'ppm')]}/>
        <Dashboard title={'inside Factors'}
                   fields={[new Measure('depth', depth, -5000, 5000, 'ft'), new Measure('Temp Inside', tempInside, -100, 500, 'Celsius'), new Measure('speed', speed, 0, 150, 'knots')]}/>
        <Dashboard title={'outside Factors'}
                   fields={[new Measure('pressure', pressure, -50, 100, 'Atmosphere'), new Measure('Temp Outside', tempOutside, -100, 500, 'Celsius'), new Measure('Tilt Angle', tiltAngle, -360, 360, 'Degrees')]}/>
      </div>
    </>

  );
}

export default App;
