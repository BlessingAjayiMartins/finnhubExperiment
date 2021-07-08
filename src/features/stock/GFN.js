const data = {"data":[{"c":["1","8","12"],"p":26.15,"s":"DSGN","t":1619804754768,"v":10}],"type":"trade"}
const price = data.data[0].p
const time = data.data[0].t
const volume = data.data[0].v
const stock = data.data[0].s
const send = {stock: stock, price: price, time: time, volume: volume}
export default send