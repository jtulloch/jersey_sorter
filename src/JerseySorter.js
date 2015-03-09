var _ = require("lodash");

var Sorter = require("./Sorter");

var FileLoader = require("./FileLoader");
var JerseyParser = require("./parsers/csv/Jersey");
var TeamParser = require("./parsers/csv/Team");

function CSVFileInputSorter() {
    this._ready = false;
    this._sorter = new Sorter();
};

CSVFileInputSorter.prototype._performSort = function() {
    var results = this._sorter.sort();
    this.callback(null,results);
};

CSVFileInputSorter.prototype._jerseysLoaded = function( err, jerseys ) {
    this._sorter.withJerseys(jerseys);

    if( this._ready ) {
        this._performSort();
    }

    this._ready = true;
};

CSVFileInputSorter.prototype._teamsLoaded = function( err, teams ) {
    this._sorter.withTeams(teams);

    if( this._ready ) {
        this._performSort();
    }

    this._ready = true;
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
    FileLoader.load( this.teams, _.bind( this._teamsLoaded, this ), TeamParser );
    FileLoader.load( this.jerseys, _.bind( this._jerseysLoaded, this ), JerseyParser );
};

module.exports = {
    CSVFileInput: function() {
        return new CSVFileInputSorter();
    }
}

