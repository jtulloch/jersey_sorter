var team = function( attributes ) {
    this.jerseys = null;
    this.small_players = 0;
    this.medium_players = 0;
    this.large_players = 0;

    if( attributes ) {
        for( var key in attributes ) {
            this[key] = attributes[key];
        }
    }

    this._initalize();
};

team.prototype._initalize = function() {
    this._needed_by_size = {
        's': this.small_players,
        'm': this.medium_players,
        'l': this.large_players
    }
};

team.prototype.getNumbers = function() {
    return ( this.jerseys || [] ).map(function( jersey ) {
        return jersey.number;
    })
};

team.prototype.getJerseys = function() {
    if( !this.jerseys ) {
        this.jerseys = [];
    }

    return this.jerseys;
};

team.prototype.addJersey = function( jersey ) {
    if( !this.jerseys ) {
        this.jerseys = [];
    }

    if( jersey.size ) {
        this._needed_by_size[ jersey.size ]--;
    }

    return this.jerseys.push( jersey );
};

team.prototype.hasNumber = function( number ) {
    return this.getNumbers().indexOf( number ) >= 0;
};

team.prototype.needsSize = function( size ) {
    return this._needed_by_size[ size ] > 0;
};

module.exports = team;
