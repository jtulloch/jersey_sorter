var _ = require("lodash");
var RSVP = require("rsvp");

var Sorter = require("./Sorter");

var FileLoader = require("./util/FileLoader");
var JerseyParser = require("./parsers/csv/Jersey");
var TeamParser = require("./parsers/csv/Team");

function CSVFileInputSorter() {
    this._sorter = new Sorter();
};

CSVFileInputSorter.prototype._loaded = function( results ) {
    var results = this._sorter
        .withJerseys(results.jerseys)
        .withTeams(results.teams)
        .sort();

    this.callback(null,results);
};

CSVFileInputSorter.prototype.jerseys = function(jerseys) {
    this.jerseys = jerseys;
    return this;
};

CSVFileInputSorter.prototype.teams = function(teams) {
    this.teams = teams;
    return this;
};

CSVFileInputSorter.prototype.callback = function(callback) {
    this.callback = callback;
    return this;
};

CSVFileInputSorter.prototype.sort = function() {
    RSVP
        .hash({
            teams: FileLoader.load(this.teams, TeamParser),
            jerseys: FileLoader.load(this.jerseys, JerseyParser)
        })
        .then(_.bind( this._loaded, this ));
};

module.exports = CSVFileInputSorter;

