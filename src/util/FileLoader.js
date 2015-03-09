var fs = require('fs');
var RSVP = require('rsvp');

var options = { encoding: 'utf8' };

module.exports = {
    load: function(file_name, parser) {
        return new RSVP.Promise(function(resolve, reject) {
            fs.readFile(file_name, options, function(err,results) {
                if( err ) {
                    reject(err);
                }

                if( parser ) {
                    parser
                        .parse(results)
                        .then(resolve);
                } else {
                    resolve( results );
                }
            });
        });
    }
};

