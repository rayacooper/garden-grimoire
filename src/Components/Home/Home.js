import React from 'react';
import './Home.css';

import PlantMasterList from '../../Plants_Master_List';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        currentId: Math.floor(Math.random() * 20),
        currentPlant: PlantMasterList.coriander
      }
    }
    render() {
      console.log(PlantMasterList.coriander.soil_type)
      return (
          <div id="Home-Container">

            <h1>Oh look, here's a number: {this.state.currentId}</h1>
            <h2>I've heard Cilantro likes {PlantMasterList.coriander.soil_type} type soil.</h2>

          </div>
      );
    }
  }

  export default Home;