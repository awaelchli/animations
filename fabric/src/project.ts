import {makeProject} from '@motion-canvas/core/lib';

import precision from './scenes/precision?scene';
import example from './scenes/example?scene';
import launch from './scenes/launch?scene';

import "./global.css";



export default makeProject({
  scenes: [launch],
  // background: '#141414',
  background: 'white',
});
