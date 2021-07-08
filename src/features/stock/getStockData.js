const WebSocket = require('ws')
const fs = require('fs');
// const { default: send } = require('./AAPL');

const API = {key: }

const socket = new WebSocket(`wss://ws.finnhub.io?token=${API.key}`);

const STOCK = [ 'BTX',  'BELFB', 'RHE',  'ISNS', 'BELFA', 'CRY',  'LAUR',
'HUSN', 'ISIG',  'DPW',  'RAIL', 'AIRG',  'MARK', 'VXRT',
'BIVI', 'AUPH',  'SB',   'TEDU', 'OCGN',  'VBLT', 'TYHT',
'MARA', 'NDLS',  'MESO', 'AP',   'EDR',   'ARQT', 'SQFT',
'IKNA', 'FIVN',  'SONN', 'JT',   'OSTK',  'CYTH', 'SCSC',
'CTS',  'CVA',   'THMO', 'OCN',  'DCBO',  'OPY',  'CERC',
'BNTX', 'CCXI',  'CRCT', 'KE',   'EKSO',  'LND',  'SOXS',
'BLCM', 'ORGO',  'HOOK', 'ONTO', 'AON',   'CRI',  'SRL',
'CURI', 'FREQ',  'YANG', 'ERYP', 'BEAM',  'SSY',  'MRM',
'WLTW', 'VIRX',  'KRON', 'PYR',  'RIOT',  'GTBP', 'CYH',
'MDJH', 'WPG',   'NRGD', 'NATR', 'LTRX',  'AMST', 'VVOS',
'CVLY', 'DIT',   'NVEC', 'ONEW', 'MPB',   'OMF',  'FTNT',
'UUU',  'ETTX',  'BPRN', 'BDSX', 'CREG',  'RFP',  'MRNA',
'UXIN', 'BTCM',  'APLS', 'AHT',  'ZIM',   'ROG',  'TERN',
'DSGN', 'YALA'


]



 

// const curr = STOCK[0]
function resolveAfter5Seconds(symbol) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(unsubscribe(symbol));
      
    }, 6250);
  });
}
function resolveAfter1Seconds(next) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(subscribe(next));
    }, 1000);
  });
}

// Unsubscribe
 var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    console.log(`${symbol} unsubscribed`)
}
// Subscribe
var subscribe = (symbol) => {
  socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}))
  console.log(`${symbol} subscribed`)
}
//write
var write = (symbol, data) => {
  fs.writeFile(`GFN.js`, `const data = ${data}
const price = data.data[0].p
const time = data.data[0].t
const volume = data.data[0].v
const stock = data.data[0].s
const send = {stock: stock, price: price, time: time, volume: volume}
export default send`, function(err) {
      if (err) {
          console.log(err);
      }
    });
}
async function start(arr) {
  // Connection opened -> Subscribe
  // async()=> { 
  for(let a = 0; a < arr.length; a++) {
    // let a = 0
    
    // console.log('start' + a)
    const curr = arr[a]
    const next = arr[a+1]
    const last = a-1
    // setTimeout(()=> {
  //  subscribe(curr)
  if(a === last) {
      console.log('LAST')
      resolveAfter1Seconds(curr)

    }

    socket.addEventListener('open', function (event) {
      socket.send(JSON.stringify({'type':'subscribe', 'symbol': curr}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+1]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+2]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+3]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+4]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+5]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+6]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+7]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+8]}))
      // socket.send(JSON.stringify({'type':'subscribe', 'symbol': STOCK[a+9]}))
      console.log(`${curr} subscribed`)
      
  });
  // Listen for messages
  socket.addEventListener('message', function (event) {
    // const data = event.data
    (async(data = event.data) => {
      
      await write(curr, data)
      console.log('Message from server ', data);
    })()
   
//     fs.writeFile(`${curr}.js`, `const data = ${data}
// const price = data.data[0].p
// const time = data.data[0].t
// const volume = data.data[0].v
// const stock = data.data[0].s
// const send = {stock: stock, price: price, time: time, volume: volume}
// export default send`, function(err) {
//       if (err) {
//           console.log(err);
//       }
//     });
    
    
    
    // console.log('price ', price);

  });
  
    
      await resolveAfter5Seconds(curr)
     await resolveAfter1Seconds(next)
    
     
    
    // }, 0)
    
    
    
// }
  }
  
  // await resolveAfter1Seconds(STOCK[a+1])
  // await resolveAfter1Seconds(STOCK[a+2])
  // await resolveAfter1Seconds(STOCK[a+3])
  // await resolveAfter1Seconds(STOCK[a+4])
  // await resolveAfter1Seconds(STOCK[a+5])
  // await resolveAfter1Seconds(STOCK[a+6])
  // await resolveAfter1Seconds(STOCK[a+7])
  // await resolveAfter1Seconds(STOCK[a+8])
  // await resolveAfter1Seconds(STOCK[a+9])
  
  
}

start(STOCK)