var parse = require('csv-parse');
var Team = require('../Team');

var parser_options = { columns: true, ltrim: true, rtrim: true };

module.exports = {
    parse: function( input, callback ) {
        parse( input, parser_options, function( err, output ) {
            callback( output.map(function( team ) {
                return new Team( team );
            }));
        });
    }
};
