import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;
  default:
    return state;
  }
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
