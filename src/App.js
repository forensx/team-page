import React, { Component } from 'react';
import './App.css';
import NavbarOverlay from "./Components/NavbarOverlay";
import DeckGL from '@deck.gl/react';
import { ArcLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import TeamPageExceptImage from "./team_page_excerpt_image.svg";

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicGFudDIwMDIiLCJhIjoiY2prenlwb2ZtMHlnMjNxbW1ld3VxYWZ4cCJ9.rOb8DhCzsysBIw69MxyWKg';

// Initial viewport settings
const initialViewState = {
  longitude: -122.4230,
  latitude: 37.8270,
  zoom: 13,
  pitch: 60,
  bearing: 10,
  width: 500,
  height: 500
};

// Data to be used by the LineLayer
const data = [{ sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }];
const layers = [
  new ArcLayer({ id: 'arc-layer', data })
];

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPosition: 1
    }
    this.scrollRegion2Ref = React.createRef()
  }

  handleOnClick = (event) => {
    //.current is verification that your element has rendered
    if (this.scrollRegion2Ref.current) {
      this.scrollRegion2Ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <NavbarOverlay className="navbar_comp" />
        <div id className="scrollRegion1">
          <div className="siteIntro">
            <div className="introHeader">
              Your <div className="inlineHeaderEmphasis">personal data</div> forensics
              </div>
            <div className="introCaption">
              Utilize the power of data analytics to drive your business’s profits up and operating costs down.
            </div>
            <button onClick={this.handleOnClick} className="transitionButton">
              Learn more
          </button>
          </div>
          <div className="deckGL_demo">
            <DeckGL
              initialViewState={initialViewState}
              layers={layers}
            >
              <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            </DeckGL>
          </div>
        </div>
        <div className="scrollRegion2" ref={this.scrollRegion2Ref}>
          <div className="region2_excerpts">
            <div className="excerptHeader">
              Don’t let your company drown in your data - sail through it. SCROLL2
          </div>
            <div className="excerptDescription">
              We help you make data-driven decisions to accelerate production and increase profits.
          </div>
            <div className="excerptCall">
              Let us assist with data implementation, analysis, and modeling for your company with a money back policy.
          </div>
            <div className="excerptImage">
              <img src={TeamPageExceptImage} alt=""></img>
            </div>
          </div>
        </div>
        <div className="scrollRegion3" ref={this.scrollRegion3Ref}>
          <div className="region3_excerpts">
            <div className="excerptHeader">
              Don’t let your company drown in your data - sail through it. SCROLL3
          </div>
            <div className="excerptDescription">
              We help you make data-driven decisions to accelerate production and increase profits.
          </div>
            <div className="excerptCall">
              Let us assist with data implementation, analysis, and modeling for your company with a money back policy.
          </div>
            <div className="excerptImage">
              <img src={TeamPageExceptImage} alt=""></img>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
