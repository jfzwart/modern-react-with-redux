import React from 'react';

class SearchBar extends React.Component {
        // onInputChange(event) {
        //     console.log(event.target.value);
        // }
        state = { term: '' };

        // onFormSubmit(event) {
        //     event.preventDefault(); //prevents default reload behavior. Needs to be called on Form
        // }

        onFormSubmit =  event => {
            event.preventDefault();
            // console.log(this.state.term);
            this.props.onSubmit(this.state.term);
        };

        // error undefined is not assigned, make sure to rewrite the onFormSubmit as an arrow function. They will bind the code

        render () {
            return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} // refers to the value of term
                        onChange={e => this.setState({ term: e.target.value })} //changes the value on an event of entering text
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;