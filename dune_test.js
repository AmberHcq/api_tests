const fs = require("fs/promises");

const API_KEY = process.env.DUNE_API_KEY;

// // GETs
// (async () => {
//     const get_10_trades_on_ethereum = "https://api.dune.com/api/v1/marketshare/dex/ethereum&allow_partial_results=true&columns=volume_usd&limit=10";

//     const get_10_pairs_for_ethereum = "https://api.dune.com/api/v1/dex/pairs/ethereum&allow_partial_results=true&limit=10"

//     const get_prices_for_ethereum = "https://api.dune.com/api/v1/prices/latest/ethereum"

//     const response = await fetch(get_prices_for_ethereum, {
//         method: 'GET',
//         headers: { 'X-Dune-Api-Key': API_KEY }
//     })
//     const data = await response.json();
//     const result = JSON.stringify(data, null, 4);
//     // console.log(result);
//     fs.writeFile("output.json", result, { encoding: "utf-8" })
// })();

async function main(mode) {
    const query_id = "5252958"

    if (mode === "execute") {
        const result = JSON.stringify((await (await fetch(`https://api.dune.com/api/v1/query/${query_id}/execute`, {
            method: "POST",
            headers: { 'X-Dune-Api-Key': API_KEY }
        })).json()), null, 4);
        console.log(result);
    } else if (mode === "read") {
        const result = JSON.stringify((await (await fetch(`https://api.dune.com/api/v1/query/${query_id}/results`, {
            method: "GET",
            headers: { 'X-Dune-Api-Key': API_KEY }
        })).json()), null, 4);
        fs.writeFile("query_output.json", result, { encoding: "utf-8" })
    }
}

main("read")