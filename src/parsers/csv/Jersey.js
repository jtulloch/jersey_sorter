var parse = require('csv-parse');

var columns = [ 'number', 'size' ];
var parser_options = { 'columns': columns, 'ltrim': true, 'rtrim': true };

module.exports = {
    parse: function( input, callback ) {
        parse( input, parser_options, function( err, output ) {
            callback( err, output );
        });
    }
};
