import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         (err) => console.log(err)
//     ); bg6                    6                                                                                                                                                                                                                                                    6666

//     return <div>Print Me!</div>;
// };

class App extends React.Component {
    // the first function that will be called when initializing the component, automatically called with props object
    // constructor(props) {
    //      // we have to call the function super. The constructor function overwrites the React.component, super makes sure the relevant code gets triggered.
    //      super(props);
    //      this.state = { lat: null, errorMessage: ''  };
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
                // call setState coming from React.component that is required to update the state.
            err =>  this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner  message="Please accept location request"/>
    }
    // React says we have to define render!!
    // Avoid putting conditional logic in render method 
    render() {
        return  ( 
        <div className="border red">
            {this.renderContent()}
        </div>
        )
        // <div>
        //     Lattitude: {this.state.lat}
        //     <br />
        //     Error: {this.state.errorMessage}
        //     </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root')); 