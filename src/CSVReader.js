var RSVP = require('rsvp');

var FileLoader = require("./util/FileLoader");
var JerseyParser = require("./parsers/csv/Jersey");
var TeamParser = require("./parsers/csv/Team");

function CSVReader(input) {
    this.jerseys = input.jerseys;
    this.teams = input.teams;
};

CSVReader.prototype.read = function() {
    return RSVP.hash({
        'teams': FileLoader.load(this.teams, TeamParser),
        'jerseys': FileLoader.load(this.jerseys, JerseyParser)
    });
};

module.exports = CSVReader;
