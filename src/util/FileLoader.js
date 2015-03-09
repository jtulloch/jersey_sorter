var fs = require('fs');
var options = { encoding: 'utf8' };

function getCallback(callback,parser) {
    if( !parser ) {
        return callback;
    }

    return function(err,data) {
        parser.parse(data,callback);
    };
}

module.exports = {
    load: function(file_name,callback,parser) {
        if(callback) {
            fs.readFile( file_name, options, getCallback( callback, parser ));
            return;
        }
        return fs.readFileSync( file_name, options );
    }
};

