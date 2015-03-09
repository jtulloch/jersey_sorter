var parse = require('csv-parse');
var RSVP = require('rsvp');

var columns = [ 'number', 'size' ];
var parser_options = { 'columns': columns, 'ltrim': true, 'rtrim': true };

module.exports = {
    parse: function( input, callback ) {
        return new RSVP.Promise(function(resolve, reject) {
            parse(input, parser_options, function(err, output) {
                if (err) {
                    reject(err);
                    return;
                } 

                resolve(output);
            });
        });
    }
};
