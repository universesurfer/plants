import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

//Prevent auto submit of form
onFormSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.state.term);
}

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text">
            </input>
          </div>

        </form>

      </div>
    );
  };
}


export default SearchBar;
