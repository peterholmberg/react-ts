import { fromJS } from 'immutable';

const defaultState = fromJS({
  networkFailed: false,
  networkProgress: false,
  allurbaserbelongtous: 'Yes',
});

const appState = (state = defaultState, action = null) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appState;
