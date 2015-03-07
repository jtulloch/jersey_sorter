var fs = require('fs');

var options = { encoding: 'utf8' };

module.exports = {
    load: function(file_name,callback) {
        if(callback) {
            fs.readFile(file_name, options, callback)
            return;
        }
        return fs.readFileSync(file_name, options);
    }
};
