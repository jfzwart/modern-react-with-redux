// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click on me!';
// }

// Create a React component
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelName = 'Enter Name'
  return (
  <div>
    <label className="label" htmlFor="name">
      {labelName}
      </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>
      {buttonText.text}
    </button>
  </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
  