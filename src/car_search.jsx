import React from 'react';
import { connect } from 'react-redux'
import { search } from './actions';

const SEARCH_STYLE = {
  margin: '1rem'
};

class CarSearch extends React.Component {
  render() {
    return (
      <div style={SEARCH_STYLE}>
        Search: <input type="text" defaultValue={this.props.query} onChange={this.onChange.bind(this)} />
      </div>
    );
  }

  onChange(event) {
    this.props.dispatch(search(event.target.value));
  }
}

export default connect()(CarSearch);
