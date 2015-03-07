var fs = require('fs');
var options = { encoding: 'utf8' };

var parser = null;

var wrapCallback = function(callback,_parser) {
    if( !_parser ) {
        return callback;
    }

    return function(err,data) {
        _parser.parse(data,callback);
    };
};

var reset = function() {
    parser = null;
};

module.exports = loader = {
    withParser: function(_parser) {
        parser = _parser;
        return loader;
    },
    load: function(file_name,callback) {
        if(callback) {
            fs.readFile(file_name, options, wrapCallback(callback,parser))
            reset();
            return;
        }
        return fs.readFileSync(file_name, options);
    }
};
