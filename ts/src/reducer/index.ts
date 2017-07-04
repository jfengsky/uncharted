import initialState from '../store/initialState'
import { ADD_PAGETYPE, ITAction } from '../action/page'

// interface Store {
//     setState: (partial: Object) => void;
//     getState: () => any;
//     subscribe: (listener: () => void) => () => void;
// }

export default (state = initialState, action:ITAction ) => {
  switch (action.type) {
    case ADD_PAGETYPE:
      return state
    default:
      return state
  }
}