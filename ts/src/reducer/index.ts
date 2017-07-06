import initialState from '../store/initialState'
import { ADD_PAGETYPE, ITAction, SEARCH_PAGETYPE, DELETE_PAGETYPE } from '../action/page'

// interface Store {
//     setState: (partial: Object) => void;
//     getState: () => any;
//     subscribe: (listener: () => void) => () => void;
// }

export default (state: any = initialState, action:ITAction ) => {
  switch (action.type) {
    case ADD_PAGETYPE:
      return Object.assign({}, state, {
        pageTypeList: [...state.pageTypeList,action.value]
      })
    case SEARCH_PAGETYPE:
      return Object.assign({}, state, {pageTypeList:action.value})
    case DELETE_PAGETYPE:
      debugger
      return state
    default:
      return state
  }
}