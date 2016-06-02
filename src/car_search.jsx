import React from 'react';

export default class CarSearch extends React.Component {
  render() {
    return (
      <input type="text" defaultValue={this.props.query} onChange={this.onChange.bind(this)} />
    );
  }

  onChange() {
  }
}
