import { ADD, GET_SECRETS } from '../actions/actions'


const initialState = {
    secrets: [
      {
"_id": "5bb7c7bb4296cd0015fd06e7",
"title": "ammon is cool",
"price": 9000
},
{
"_id": "5bb7c7fc4296cd0015fd06e8",
"title": "Clinton smells 2x more than ammon",
"price": 18000
}

    ]
}

const reducer = (state = initialState, action) => {

switch(action.type){
  case ADD:
      return {
        ...state,
        secrets: [...state.secrets, {title: action.title, price: action.price}]
      }
      case GET_SECRETS:
      return {
        ...state,
        secrets: action.secrets,
      }
  default:
  return state;
}

}
export default reducer;