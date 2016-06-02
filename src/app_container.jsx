import React from 'react';
import { connect } from 'react-redux';

import CarSearch from './car_search.jsx';
import CarList from './car_list.jsx';
import AddCar from './add_car.jsx';

const App = ({query, cars}) => {
  return (
    <div>
      <AddCar />
      <CarSearch query={query} />
      <CarList cars={cars} query={query} />
    </div>
  );
};

const mapStore = (state) => {
  return state;
}

export default connect(mapStore)(App);
