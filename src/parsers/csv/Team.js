var parse = require('csv-parse');
var RSVP = require('rsvp');

var Team = require('../../Team');

var columns = ['name','small_players','medium_players','large_players'];
var parser_options = { 'columns': columns, 'ltrim': true, 'rtrim': true };

module.exports = {
    'parse': function(input) {
        return new RSVP.Promise(function(resolve, reject) {
            parse(input, parser_options, function(err, output) {
                if (err) {
                    reject(err);
                    return;
                }

                var teams = output.map(function(team) {
                    return new Team(team);
                });

                resolve(teams);
            });
        });
    }
};
