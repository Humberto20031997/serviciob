const express = require('express');
const app = express();
const request = require('request');
const async = require('async');

app.get('/upcoming', (req, res) => {
    async.times(2, (i, callback) => {
    var options = {
        url: 'link api',
        qs: {
            'empresa': 'nom_estab',
            'actividad': 'raz_social',
            'codigo postal': 'cod_postal'
        },
    } 
    request(options, (error, response, body) => {
        var result = JSON.parse(body)
        var data = result.results;
        callback(null, data);
    });
    }, (err, results) => {
        res.json(results);
    });
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})
