const express = require('express');
const app = express();
const request = require('request');
const async = require('async');

app.get('/upcoming', (req, res) => {
    async.times(2, (i, callback) => {
        const options = {
            method: 'GET',
            url: 'https://numbersapi.p.rapidapi.com/1492/year',
            qs: {fragment: 'true', json: 'true'},
            headers: {
              'x-rapidapi-key': '9d4b049e43msh35fba3d6e9c94c7p1f601ejsn8a590d0b4aac',
              'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
              useQueryString: true
            }
          };
    request(options, (error, response, body) => {
        var result = JSON.parse(body)
        var data = result.results;
        callback(null, data);
    });
    }, (err, results) => {
        res.json(results);
        console.log(err);
    });
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})
