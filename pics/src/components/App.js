import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] } ; // empty array []

    onSearchSubmit = async (term) => {
        //data fetch with Axios to unsplash
        const response = await unsplash.get('/search/photos/', {
            params: { query: term },
        });

        this.setState({ images: response.data.results }); 
        // .then(response => { //get a response from a ASYNC request, you can also put an async keyword infront of onSearchSubmit
        //     console.log(response.data.results);
        // });
    } //grabs the information from the searchbar to be able to use it in the app. Make sure you invoke it in the searchbar div;

   render() { 
       return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} Images
            <ImageList images={this.state.images}/>
        </div>
        )
   };
};

export default App;

