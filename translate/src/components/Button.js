import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;

  renderButton(colorValue) {
    return (
      <button className={`ui button ${colorValue}`}>
      <LanguageContext.Consumer>
        {(value) => value === 'english' ? 'submit' : 'voorleggen' }
      </LanguageContext.Consumer>
      </button>
      )
  };


  render() {
      // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return(
      <ColorContext.Consumer>
        {(colorValue) => this.renderButton(colorValue)}
      </ColorContext.Consumer>
      )
  }
}

// Button.contextType = LanguageContext;

export default Button;
