import React from 'react';
import { connect } from 'react-redux'
import { addCar } from './actions';

const defaultState = () => {
  return {
    color: '',
    make: '',
    model: ''
  };
};

const FORM_STYLE = {
  border: '1px solid #ccc',
  margin: '1rem',
  padding: '1rem'
};

const FORM_ITEM_STYLE = {
  marginBottom: '1rem',
};

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState();
  }

  render() {
    return (
      <form style={FORM_STYLE}>
        <h4>Add Car</h4>
        <div style={FORM_ITEM_STYLE}>
          Make: <input type="text" value={this.state.make} onChange={this.onChangeMake.bind(this)} />
        </div>
        <div style={FORM_ITEM_STYLE}>
          Model: <input type="text" value={this.state.model} onChange={this.onChangeModel.bind(this)} />
        </div>
        <div style={FORM_ITEM_STYLE}>
          Color: <input type="text" value={this.state.color} onChange={this.onChangeColor.bind(this)} />
        </div>
        <button onClick={this.onAddVehicle.bind(this)}>Add</button>
      </form>
    );
  }

  onChangeMake(event) {
    this.setState({
      make: event.target.value
    });
  }

  onChangeModel(event) {
    this.setState({
      model: event.target.value
    });
  }

  onChangeColor(event) {
    this.setState({
      color: event.target.value
    });
  }

  onAddVehicle(e) {
    e.preventDefault();
    this.props.dispatch(addCar(
      this.state.make,
      this.state.model,
      this.state.color
    ));
    this.setState(defaultState());
  }
}

export default connect()(AddCar);

