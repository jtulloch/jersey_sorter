function Team( attributes ) {
    attributes = attributes || {};

    this.name = attributes.name;
    this.jerseys = attributes.jerseys || null;

    this.small_players = attributes.small_players || 0;
    this.medium_players = attributes.medium_players || 0;
    this.large_players = attributes.large_players || 0;

    this._needed_by_size = {
        's': this.small_players,
        'm': this.medium_players,
        'l': this.large_players
    }
};

Team.prototype.getNumbers = function() {
    return ( this.jerseys || [] ).map(function( jersey ) {
        return jersey.number;
    })
};

Team.prototype.getJerseys = function() {
    if( !this.jerseys ) {
        this.jerseys = [];
    }

    return this.jerseys;
};

Team.prototype.addJersey = function( jersey ) {
    if( !this.jerseys ) {
        this.jerseys = [];
    }

    if( jersey.size ) {
        this._needed_by_size[ jersey.size ]--;
    }

    return this.jerseys.push( jersey );
};

Team.prototype.hasNumber = function( number ) {
    return this.getNumbers().indexOf( number ) >= 0;
};

Team.prototype.needsSize = function( size ) {
    return this._needed_by_size[ size ] > 0;
};

module.exports = Team;
