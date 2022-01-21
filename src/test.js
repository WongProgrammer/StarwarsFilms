const results = require('./test.json')


console.log(results.results.forEach((result) => {
    console.log(result.title)
}))