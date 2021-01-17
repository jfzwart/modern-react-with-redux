import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;

  renderButton(language) {
    return (
      <button className={`ui button ${language}`}>
      <LanguageContext.Consumer>
        {( { language }) => language === 'english' ? 'submit' : 'voorleggen' }
      </LanguageContext.Consumer>
      </button>
      )
  };


  render() {
      // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return(
      <ColorContext.Consumer>
        {(language) => this.renderButton(language)}
      </ColorContext.Consumer>
      )
  }
}

// Button.contextType = LanguageContext;

export default Button;
