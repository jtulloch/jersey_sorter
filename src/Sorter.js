var Team = require('./Team');
var Sorter = function() {};

Sorter.prototype.withTeams = function(teams) {
    this.teams = teams.map(function( team ) {
        return new Team(team);
    });
    return this;
}

Sorter.prototype.withJerseys = function(jerseys) {
    this.jerseys = jerseys;
    return this;
}

Sorter.prototype.sort = function() {
    this.jerseys.forEach(function( jersey ) {
        this.teams.forEach(function( team ) {
            if( !team.hasNumber( jersey.number )) {
                team.addJersey( jersey );
            }
        });
    }, this );

    return this.teams;
}


module.exports = Sorter;
