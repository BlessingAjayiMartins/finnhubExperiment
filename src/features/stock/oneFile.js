const data = {"data":[{"c":["1","8","12"],"p":9.35,"s":"CLOV","t":1618845539775,"v":50},{"c":["1"],"p":9.355,"s":"CLOV","t":1618845539982,"v":800},{"c":["1","12"],"p":9.359,"s":"CLOV","t":1618845540010,"v":16},{"c":["1","12"],"p":9.3581,"s":"CLOV","t":1618845540324,"v":1},{"c":["1"],"p":9.3583,"s":"CLOV","t":1618845540674,"v":600}],"type":"trade"}
const price = data.data[0].p
const time = data.data[0].t
const volume = data.data[0].v
const stock = data.data[0].s
const send = {stock: stock, price: price, time: time, volume: volume}
export default send