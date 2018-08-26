import React, { Component } from 'react';
import Seeker from './components/Seeker';

class App extends Component {
  constructor() {
    super();
    this.state = { search: 'Cafecitos' };
  }

  searchData = search => {
    console.log(search);

    this.setState({
      search
    });
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
