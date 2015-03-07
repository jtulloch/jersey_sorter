var parse = require('csv-parse');
var Team = require('../Team');

var columns = ['name','small_players','medium_players','large_players'];
var parser_options = { 'columns': columns, 'ltrim': true, 'rtrim': true };

module.exports = {
    parse: function( input, callback ) {
        parse( input, parser_options, function( err, output ) {
            callback( output.map(function( team ) {
                return new Team( team );
            }));
        });
    }
};
