import React, { Component } from 'react';
// Components
import Seeker from './components/Seeker';
import Result from './components/Result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      images: [],
      page: ''
    };
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  };

  previousPage = () => {
    // Read the current state
    let page = this.state.page;
    // If the page is 1 and do not go backwards
    if (page === 1) return null;
    // Subtract one to the current page
    page -= 1;
    // Add the change to the state
    this.setState({ page }, () => this.requestApi(), this.scroll());
    // console.log('Previous page...', page);
  };

  nextPage = () => {
    // Read the current state
    let page = this.state.page;
    // Add one to the current page
    page += 1;
    // Add the change to the state
    this.setState({ page }, () => this.requestApi(), this.scroll());
    // console.log('Next page...', page);
  };

  requestApi = () => {
    const inputUser = this.state.search;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=10069061-f3ccd001d44a51c6f0ae4d8ef&q=${inputUser}&per_page=20&page=${page}`;

    fetch(url)
      .then(res => res.json())
      .then(result => this.setState({ images: result.hits }));
  };

  searchData = search => {
    this.setState(
      {
        search: search,
        page: 1
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
        </div>

        <div className="row justify-content-center">
          <Result
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
