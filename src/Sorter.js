var Sorter = function() {};

Sorter.prototype.withTeams = function(teams) {
    this.teams = teams;
    return this;
}

Sorter.prototype.withJerseys = function(jerseys) {
    this.jerseys = jerseys;
    return this;
}

Sorter.prototype.sort = function() {
    this.jerseys.forEach(function( jersey ) {
        this.teams.forEach(function( team ) {
            if( team.needsSize( jersey.size ) && !team.hasNumber( jersey.number )) {
                team.addJersey( jersey );
            }
        });
    }, this );

    return this.teams;
}


module.exports = Sorter;
