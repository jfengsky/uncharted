import initialState from '../store/initialState'
import { ADD_PAGETYPE, ITAction, SEARCH_PAGETYPE, DELETE_PAGETYPE, MODIFY_PAGETYPE } from '../action/page'

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
      let pageTypeList = [...state.pageTypeList].filter( (item: any) => {
        if(item._id !== action.value){
          return item
        }
      })
      return Object.assign({}, state, {pageTypeList})
    case MODIFY_PAGETYPE:
      let pageTypeListModify = [...state.pageTypeList].map( (item: any) => {
        if(item._id === action.value.id){
          item.name = action.value.value
        }
        return item
      })
      return Object.assign({}, state, {pageTypeList: pageTypeListModify})
    default:
      return state
  }
}