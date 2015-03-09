var Sorter = function() {};

Sorter.prototype.withTeams = function(teams) {
    this.teams = teams;
    return this;
};

Sorter.prototype.withJerseys = function(jerseys) {
    this.jerseys = jerseys;
    return this;
};

Sorter.prototype.addToTeam = function( jersey ) {
    var length = this.teams.length;

    for (var i = 0; i < length; i++) {
        var team = this.teams[i];

        if( team.needsSize( jersey.size ) && !team.hasNumber( jersey.number )) {
            team.addJersey( jersey );
            break;
        }
    };
};

Sorter.prototype.sort = function() {
    this.jerseys.forEach(function( jersey ) {
        this.addToTeam( jersey );
    }, this );

    return this.teams;
};


module.exports = Sorter;
