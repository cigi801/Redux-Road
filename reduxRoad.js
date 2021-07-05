//Defined initialState with three properties
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
};
//Defined reducer
const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    //Created gather action.type to return new state object
    case 'gather': {
      return {
        ...state,
        supplies: state.supplies + (15),
        days: state.days + (1)
      };
    }
    //Created travel action.type to return new state object
    case 'travel': {
      //Returning current state if there are not sufficient supplies to travel given number of days
      if ((state.supplies - action.payload) <= 0) {
        return {
          ...state
          } 
        } else {
      return {
        ...state,
        supplies: state.supplies - (action.payload * 20),
        distance: state.distance + (action.payload * 10),
        days: state.days + (action.payload)
          }   
        }
      }
    //Created tippedWagon action.type to return new state object
    case 'tippedWagon': {
      return {
      ...state,
      supplies: state.supplies - (30),
      days: state.days + (1)
      }
    }
    default: {
      return state;
    }
  }
}

//Called reducer with undefined state and empty action object. Results will be stored in new variable wagon
let wagon = reducer(undefined, {});
//Day 1 results
wagon = reducer(wagon, {type: 'travel', payload: 1});
//Day 2 results
wagon = reducer(wagon, {type: 'gather'});
//Day 3 results
wagon = reducer(wagon, {type: 'tippedWagon'});
//Day 4 results
wagon = reducer(wagon, {type: 'travel', payload: 3});
//Checking to make sure supplies cannot go below 0
wagon = reducer(wagon, {type: 'travel', payload: 6});
console.log(wagon);
