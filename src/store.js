import {
  SEARCH,
  ADD_CAR
} from './constants';

const INITIAL_STATE = {
  cars: [{
    make: 'Audi',
    model: 'A4',
    color: 'Black'
  }, {
    make: 'Audi',
    model: 'A6',
    color: 'Black'
  }, {
    make: 'Audi',
    model: 'R8',
    color: 'Brown'
  }, {
    make: 'Citroën',
    model: 'C4',
    color: 'Brown'
  }],
  query: ''
};

export default function store(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SEARCH:
      return {
        ...state,
        query: action.query
      };
    case ADD_CAR:
      return {
        ...state,
        cars: state.cars.concat([{
          make: action.make,
          model: action.model,
          color: action.color
        }])
      };
    default:
      return state;
  }
}
