import {GET_ITEMS, FIND_ITEMS, OPEN_CART} from '../actions/actionsType';

const initialState = {
  content: [],
  data: [],
  cartStatus: false,
  inputField: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_CART:
      return {
        ...state,
        cartStatus: payload,
      };

    case GET_ITEMS:
      return {
        ...state,
        content: payload,
        data: payload
      };

    case FIND_ITEMS:
      if (payload !== ""){
        return {
          ...state,
          inputField: payload,
          content: state.data.filter((product)=>{
            if(product.name.toLowerCase().includes(payload) && payload !== ''){
              console.log('if')
              return product
            } 
            return ""
          })
        }
      } else {
        return {
          ...state,
          inputField: payload,
          content: state.data,
        }
      }
      
    default:
      return state
  }
};