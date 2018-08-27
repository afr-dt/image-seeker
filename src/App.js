import React, { Component } from 'react';
import Seeker from './components/Seeker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      images: []
    };
  }

  requestApi = () => {
    const inputUser = this.state.search;
    const url = `https://pixabay.com/api/?key=9931281-d2f7fbdad64ff56f1e152f496&q=${inputUser}`;

    fetch(url)
      .then(res => res.json())
      .then(result => this.setState({ images: result.hits }));
  };

  searchData = search => {
    // console.log(search);
    this.setState(
      {
        search
      },
      () => {
        this.requestApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image seeker...</p>
          <Seeker searchData={this.searchData} />
          {this.state.search}
        </div>
      </div>
    );
  }
}

export default App;
