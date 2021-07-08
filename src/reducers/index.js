import { combineReducers } from 'redux';
import { stockGainersSliceReducer } from '../features/stock/stockGainersSlice';


const rootReducer = combineReducers({
  stockGainer: stockGainersSliceReducer,
  
})

export default rootReducer