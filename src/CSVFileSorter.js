var FileLoader = require("./FileLoader");
var Sorter = require("./Sorter");
var JerseyParser = require("./parsers/Jersey");
var TeamParser = require("./parsers/Team");
var _ = require("lodash");

var sorter = function() {
    this._ready = false;
    this._sorter = new Sorter();
};

sorter.prototype._performSort = function() {
    var results = this._sorter.sort();
    this.callback(null,results);
};

sorter.prototype._jerseysLoaded = function( err, jerseys ) {
    this._sorter.withJerseys(jerseys);

    if( this._ready ) {
        this._performSort();
    }

    this._ready = true;
};

sorter.prototype._teamsLoaded = function( err, teams ) {
    this._sorter.withTeams(teams);

    if( this._ready ) {
        this._performSort();
    }

    this._ready = true;
};

sorter.prototype.jerseys = function(jerseys) {
    this.jerseys = jerseys;
    return this;
};

sorter.prototype.teams = function(teams) {
    this.teams = teams;
    return this;
};

sorter.prototype.callback = function(callback) {
    this.callback = callback;
    return this;
};

sorter.prototype.sort = function() {
    FileLoader
        .withParser(TeamParser)
        .load(this.teams,_.bind(this._teamsLoaded,this));

    FileLoader
        .withParser(JerseyParser)
        .load(this.jerseys,_.bind(this._jerseysLoaded,this));
};

module.exports = sorter;

