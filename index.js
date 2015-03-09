var RSVP = require('rsvp');

var CSVReader = require('./src/CSVReader');
var Sorter = require('./src/Sorter');

module.exports = {
    'CSVReader': CSVReader,
    'Sorter': Sorter,
    'sort': function(reader, sorter) {
        return new RSVP.Promise(function(resolve, reject) {
            reader.read().then(function(results) {
                sorter.sort(results).then(resolve);
            }, reject);
        });
    }
};
