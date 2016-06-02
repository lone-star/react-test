import React from 'react';
import { connect } from 'react-redux';

const CAR_STYLE = {
  marginTop: '1rem'
};

const CAR_PROPERTY_STYPE = {
  marginLeft: '1rem'
};

const CarItem = ({car}) => {
  return (
    <div style={CAR_STYLE}>
      <span style={CAR_PROPERTY_STYPE}>make: <strong>{car.make}</strong></span>
      <span style={CAR_PROPERTY_STYPE}>model: <strong>{car.model}</strong></span>
      <span style={CAR_PROPERTY_STYPE}>color: <strong>{car.color}</strong></span>
    </div>
  );
}

const CarList = ({cars}) => {
  return (
    <div>
      {cars.map((car, key) => <CarItem car={car} key={key} />)}
    </div>
  );
};

export default CarList;
