import React from 'react';
import './App.css';
import NavbarOverlay from "./Components/NavbarOverlay";
import DeckGL from '@deck.gl/react';
import { ArcLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicGFudDIwMDIiLCJhIjoiY2prenlwb2ZtMHlnMjNxbW1ld3VxYWZ4cCJ9.rOb8DhCzsysBIw69MxyWKg';

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 15,
  bearing: 30
};

// Data to be used by the LineLayer
const data = [{ sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }];


function App() {

  const layers = [
    new ArcLayer({ id: 'arc-layer', data })
  ];

  return (
    <div className="App">
      <div className="siteIntro">
        <div className="introHeader">
          Your <div className="inlineHeaderEmphasis">personal data</div> forensics
        </div>
        <div className="introCaption">
          Utilize the power of data analytics to drive your business’s profits up and operating costs down.
          </div>
        <button className="transitionButton">
          Learn more
        </button>
      </div>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </div >
  );
}

export default App;
