const csv = require('csv-parser');
const fs = require('fs');

let data = []
let canada = []
let usa = []


fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        data.push(row)
    })
    .on('end', () => {
        canada = data.filter(line => line.country == "Canada")
        usa = data.filter(line => line.country == "United States")
        let canadaData = "country,year,population\n"
        canada.map(line => {
            let { country, year, population } = line
            canadaData += `${country},${year},${population}\n`
        })
        let usaData = "country,year,population\n"
        usa.map(line => {
            let { country, year, population } = line
            usaData += `${country},${year},${population}\n`
        })
        fs.writeFile("canada.txt", canadaData, (err) => {
            if (err) {
                console.log(`Write Error: ${err})`)
            } else {
                console.log("Write Success")
            }
        })
        fs.writeFile("usa.txt", usaData, (err) => {
            if (err) {
                console.log(`Write Error: ${err})`)
            } else {
                console.log("Write Success")
            }
        })
        console.log("Assignment successfully completed.")
    });