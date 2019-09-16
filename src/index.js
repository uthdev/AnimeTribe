import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AnimeTribe extends Component {
  render() {    
    return (
    <div>
      <h1>AnimeTribe</h1>
      <p>Welcome to AnimeTribe</p>
    </div> 
    )
  }
}

ReactDOM.render(<AnimeTribe />, document.getElementById('root'));

