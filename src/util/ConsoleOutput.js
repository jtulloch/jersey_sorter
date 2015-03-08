var output = function(formatter) {
    this.formatter = formatter;
};

output.prototype.send = function(input) {
    input.forEach(function(item) {
        console.log( this.formatter.format(item));
    }, this )
};

module.exports = output;


