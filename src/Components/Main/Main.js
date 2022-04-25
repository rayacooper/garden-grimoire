import React from 'react';
import './Main.css';

class Main extends React.Component {
    constructor() {
      super();
      this.state={
        currentId: 1
      }
    }
    render() {
      return (
          <div id="Main-Container">
            <div className='Main-Container--shadow'>
              
            </div>
          </div>
      );
    }
  }

  export default Main;