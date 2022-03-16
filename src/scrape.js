// import React from 'react'
// import { addStock } from './features/stock/stockGainersSlice'
// import { store } from './index'
const axios = require("axios")
const cheerio = require("cheerio")
// const fs = require('fs')







const ScrapeGainers = () => {
  const result = []

  // const fethHtml = async (url) => {
  //   try {
  //     const { data } = await axios.get(url);
  //     return data;
  //   } catch {
  //     console.error(
  //       `ERROR: An error occurred while trying to fetch the URL: ${url}`
  //     );
  //   }
  // };

  const get = async () => {
    const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-gainers/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }
    // console.log(html)

    const selector = cheerio.load(html);

    // Here we are telling cheerio cdthat the "<a>" collection 
    //is inside a div with id 'search_resultsRows' and 
    //this div is inside other with id 'search_result_container'.
    //So,'searchResults' is an array of cheerio objects with "<a>" elements
    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        // let hold = 
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    // store.dispatch(addStock(result))
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    console.log(time)
    console.log(result)

    // fs.writeFile("prospects.js", `const stock = [${result}]`, function(err) {
    //   if (err) {
    //       console.log(err);
    //   }
    // });
  }
  get()
  // return (
  //   <div>
  //     Loading...
  //   </div>
  // )
}
ScrapeGainers()
// export default ScrapeGainers