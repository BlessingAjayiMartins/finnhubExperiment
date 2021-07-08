import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { store } from '../..'

// const manageData = (data) => async (dispatch, getState) => {
//   const {stock } = data
//   const ticker = getState().stockGainer.all[stock]
//   if (ticker === undefined) {

//   }
// }
const stockGainersSlice = createSlice({
  name: 'stockGainer',
  initialState: {
    all: {}
    // hits: []
  },
  reducers: {
    addStock: (state, action) => {
      // const {stock, price, time, volume} = action.payload
      const arr = action.payload
      // const check = arr[0].stock
      // if (state.all[check] != undefined) {
      //   upDate(arr)
      // }

      for (let a= 0; a < arr.length; a++) {
        const {stock, price, time, volume} = arr[a]
        if (!state.all[stock]) {
          state.all[stock] = [{stock: stock, price: price, time: time, volume: volume}]
        } 
        // else {
          // state.all[stock].push({stock: stock, price: price, time: time, volume: volume})
        // }
        
        
      }
      
    } ,
    onePercent: (state, action) => {
      // const {check} = action.payload
      const arr = action.payload
      let a = 0, b = 1
      const {stockA, priceA, timeA, volumeA} = arr[a]
      const {stockB, priceB, timeB, volumeB} = arr[b]
      const timeDiff = (timeB - timeA)/ 60000
      const priceDiff = priceB / priceA
      if (priceDiff) {
              state.hits.push(`check: ${stockA} has increased over 1% in ${timeDiff} min`)
            }
      // let result = ''
      // for (let prop in state.all) {
      //   state.hits.push(state.all[prop].length)
      //   if (state.all[prop].length > 1) {
      //     let last = state.all[prop].length - 1
      //     let sLast = state.all[prop].length - 2
      //     let {stockA, priceA, timeA, volumeA} = state.all[prop][sLast]
      //     let {stockB, priceB, timeB, volumeB} = state.all[prop][last]
      //     let timeDiff = (timeB - timeA)/ 60000
      //     let priceDiff = priceB / priceA 
      //     state.hits.push({priceDiff: priceDiff, timeDiff: timeDiff})
      //     if (priceDiff) {
      //       result = `${check}: ${stockA} has increased over 1% in ${timeDiff} min`
      //     }
          
      //   }
      //   state.hits.push(result)
      // }
      // result.length > 1 ? state.hits.push(result) : result = 'try again'
      

      
      
    },
    threePercent: (state, action) => {
      for (const prop in state.all) {
        if (state.all[prop].length > 1) {
          let last = state.all[prop].length - 1
          let sLast = state.all[prop].length - 2
          const {stockA, priceA, timeA, volumeA} = state.all[prop][sLast]
          const {stockB, priceB, timeB, volumeB} = state.all[prop][last]
          const timeDiff = (timeB - timeA)/ 60000
          const priceDiff = priceB / priceA 

          if (priceDiff > 3) {
            state.hits.push(`${stockA} has increased over 3% in ${timeDiff} min`)
          }
        }
      }
    },
    fivePercent: (state, action) => {
      for (const prop in state.all) {
        if (state.all[prop].length > 1) {
          let last = state.all[prop].length - 1
          let sLast = state.all[prop].length - 2
          const {stockA, priceA, timeA, volumeA} = state.all[prop][sLast]
          const {stockB, priceB, timeB, volumeB} = state.all[prop][last]
          const timeDiff = (timeB - timeA)/ 60000
          const priceDiff = priceB / priceA 

          if (priceDiff > 5) {
            state.hits.push(`${stockA} has increased over 5% in ${timeDiff} min`)
          }
        }
      }
    },
    upDate: (state, action) => {
      const arr = action.payload
      for (let a= 0; a < arr.length; a++) {
        const {stock, price, time, volume} = arr[a]
        let last = state.all[stock].length - 1
        if (state.all[stock] && time - state.all[stock][last].time > 6000 ) {
          state.all[stock].push({stock: stock, price: price, time: time, volume: volume})
          // const last = state.all[stock].length - 1
          // const sLast = state.all[stock].length - 2
          // const send = [state.all[stock][sLast], state.all[stock][last]]
          // onePercent(send)
          // threePercent(send)
          // fivePercent(send)

          
        } 
      }
      
    } ,
    

  }
})

export const stockGainersSliceReducer = stockGainersSlice.reducer
export const {addStock, upDate, onePercent, threePercent, fivePercent} = stockGainersSlice.actions