const data = {"data":[{"c":["1","8","12"],"p":133.22,"s":"AAPL","t":1618417965944,"v":13},{"c":["1","12"],"p":133.22,"s":"AAPL","t":1618417965944,"v":87},{"c":["1","12"],"p":133.22,"s":"AAPL","t":1618417966633,"v":1},{"c":["1","12"],"p":133.215,"s":"AAPL","t":1618417966750,"v":50}],"type":"trade"}

const price = data.data[0].p
const time = data.data[0].t
const volume = data.data[0].v

