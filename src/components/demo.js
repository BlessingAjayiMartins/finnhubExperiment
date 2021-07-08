import React, {useState, useEffect} from 'react'
import { addStock, fivePercent, onePercent, threePercent, upDate } from '../features/stock/stockGainersSlice'
import { store } from '../index'
// import AAPL from '../features/stock/AAPL'
import GFN from '../features/stock/GFN'



const Demo = () => {
  // const [tick, setTick] = useState({})
    store.dispatch(addStock([GFN]))
    store.dispatch(upDate([GFN]))
    

    // ussEffect(() => {
      const state = store.getState().stockGainer.all
      const stockArr = (arr) => {
        const result = []
        for (const prop in arr) {
          if (prop != 'undefined') {
            result.push(prop)
          }
          
        }
        return result
      }
      
      const initPriceArr = (obj) => {
        const result =[] 
        for (const prop in obj) {
          result.push(obj[prop][0].price)
        }
        return result
      }
      const progression = (obj) => {
        const result = [] 
        for (const prop in obj) {
          const arr = obj[prop]
          const result1 = []
          if (arr.length > 1) {
            for (let a = 0, b = 1; b< arr.length; b++, a++) {
              if (arr[a] === undefined) break;
              const prev = arr[a].price
              const curr = arr[b].price
              const diff = curr - prev
              const currChange = Number((diff/prev)*100).toFixed(2)
              let color = ''
              if (currChange > 5) {
                color = 'rounded-pill  mb-2 bg-primary text-white'
              } else  if (currChange > 3) {
                color = 'rounded-pill  mb-2 bg-success text-white'
              } else  if (currChange > 0) {
                color = 'rounded-pill  mb-2 bg-secondary text-white'
              } else  if (currChange > -3) {
                color = 'rounded-pill  mb-2 bg-warning text-white'
              } else  if (currChange < -3) {
                color = 'rounded-pill  mb-2 bg-danger text-white'
              }
              const colorChange = <div className={color}>`{arr[a].stock}: {currChange}%`</div>
              console.log({prev: prev, curr: curr, diff: diff, currChange: currChange})
              // result1.push(`${arr[a].stock}: ${currChange}%`)
              result1.push(colorChange)

            }
          } else {
            result1.push(<div className='rounded-pill mb-2 bg-dark text-white'>`waiting`</div>)
          }
          result.push(result1)
          
        }
        const final = []
        return final.concat(result)
      }
      const spread = progression(state).map(el => (
        <div>
          <tr className=''>
          {el.map(item => (
            <td className=''>
              {item}
            </td>
          ))}
        </tr>
        </div>
        
        
      ))
      const price = initPriceArr(state).map(item => (
        <div className='mb-2'>
          {item}
        </div>
            
          
      ))
      const stock = stockArr(state).map(item => (
        <div className='mb-2'>
          {item}
        </div>
        
      ))
    // })
    

  
  
  // store.dispatch(onePercent({check:'CHECK'}))
  // store.dispatch(threePercent())
  // store.dispatch(fivePercent())
  

  return (
    <>
    <div className='container-fluid bg-dark text-light'>
      <button>PUSH ME</button>
      <div className='row'>
        <div className='col-1'>
          Stock
          <div className=''>
            {stock}
          </div>
        </div>
        <div className='col-1'>
          initPrice
          <div className=''>
            {price}
          </div>
        </div>
        <div className='col'>
          Spread
          <div className=''>
            {spread}
          </div>
        </div>
      </div>
      
      
      
      

       
    </div>
    
    </>
  )
}

export default Demo