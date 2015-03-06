var team = function( attributes ) {
    this.jerseys = null

    if( attributes ) {
        for( var key in attributes ) {
            this[key] = attributes[key];
        }
    }
}

team.prototype.getNumbers = function() {
    return ( this.jerseys || [] ).map(function( jersey ) {
        return jersey.number;
    })
}

team.prototype.getJerseys = function() {
    if( !this.jerseys ) {
        this.jerseys = [];
    }

    return this.jerseys;
}

team.prototype.addJersey = function( jersey ) {
    if( !this.jerseys ) {
        this.jerseys = [];
    }

    return this.jerseys.push( jersey );
}

team.prototype.hasNumber = function( number ) {
    return this.getNumbers().indexOf( number ) > 0;
}

module.exports = team;
