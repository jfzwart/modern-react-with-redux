import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // static contextType = LanguageContext;
  renderSubmit(value) {
    return value === 'english' ? 'Name' : 'Naam'
  }

  render() {
    // const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
        <div className="ui field">
          <label>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </label>
          <input />
        </div>
      )
  }
}

export default Field;
