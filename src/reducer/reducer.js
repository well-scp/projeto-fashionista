import {GET_ITEMS, FIND_ITEMS, OPEN_CART, ADD_SIZE, ADD_TO_BAG} from '../actions/actionsType';

const initialState = {
  content: [],
  data: [],
  cartStatus: false,
  inputField: '',
  sizeSelected: '',
  bag: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_CART:
      return {
        ...state,
        cartStatus: payload,
      };

    case GET_ITEMS:
      const dados = payload.map((product, index) => {
        product.id = index;
        return product
      });

      return {
        ...state,
        data: dados,
        content: dados,
      };

    case FIND_ITEMS:
      const dadosFiltered = state.data.filter((product)=>{
        if(product.name.toLowerCase().includes(payload) && payload !== ''){
          return product
        } 
        return ""
      })
      
      return {
        ...state,
        inputField: payload,
        content: payload? dadosFiltered : state.data,
      }

      case ADD_SIZE:
        return {
          ...state,
          sizeSelected: payload,
        }

      case ADD_TO_BAG:
        const prod = state.bag.map((item) => {
          console.log(item.size, payload.size)
          if (item.id === payload.id && item.size === payload.size) {
            item.count +=1
            return item
          } else { 
            return item 
          }
        })
        

        const prodFind = state.bag.find((item) => item.id === payload.id && item.size === payload.size)
        console.log(prodFind)
        if (prodFind === undefined) {payload.count=1}

        return {
          ...state,
          bag: prodFind? prod : [...state.bag, payload],
        }
      
    default:
      return state
  }
};