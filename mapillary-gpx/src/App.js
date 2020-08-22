import React, { Component } from 'react';
import 'mapillary-js/dist/mapillary.min.css';
import './App.css';
import { Viewer } from 'mapillary-js';
import { getImageKeys } from './api';
import { sleep } from './helpers';

const clientId = "YVRORzdsbGxFS2lXcHhpNzdZSFFhNTplYjM1NzFlN2NhNGJlMzlk";

class App extends Component {

  componentDidMount() {
    getImageKeys().then(async (keys) => {
      let imageKey = keys[0];
      let mly = new Viewer(
        'mly',
        clientId,
        imageKey);
      let count = 0;
      for (const key of keys.splice(1)) {
        count++;
        console.log(count)
        imageKey = key;
        mly = new Viewer('mly', clientId, imageKey);
        await sleep(500);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Mapillary GPX
          </p>
          <div id='mly' style={{width: "640px", height: "480px"}}></div>
        </header>
      </div>
    );
  }
}

export default App;
