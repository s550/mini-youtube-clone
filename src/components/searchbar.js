import React, { Component } from 'react';
// when user types input we need to search the api with that
// functional components are literally functions
// class component are the smart components that are reuseable
class Search extends Component {
  constructor(props){
      super(props);

      this.state = { term: '' };
  }
  render() {
    // must return jsx
    return(
      <div className="search-bar">

        <input
          value={this.state.term}
          // another way of saving the value to call it later from what i understand
          // controlled component its value is now set by state and value only changes when state changes.
          onChange ={event => this.onInputChange(event.target.value)} />

      </div>

    );
    // Value of the input: {this.state.term}
    // control fields value is set by the state instead of the other way around.
    // state should tell input what to be
    // same as
    // return input onChange ={(event) => console.log(event.target.value)} />;
    // delete other stuff of course.
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearch(term);
  }
   // onInputChange(term) {
    // handle or on then the name of the element youre watching then the name of the event itself.
    // return this.setState({ term: event.target.value });
  // }
}

export default Search;

// when a state of a component changes the render function will be re ran
// you must initialize state first before using it.
//  state will only ever be changed inside the constructor function no where elese.
// you need this.setState() to update the state.
