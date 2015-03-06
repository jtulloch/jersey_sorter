var team = function( attributes ) {
    this.jerseys = [];

    for( var key in attributes ) {
        this[key] = attributes[key];
    }
}

team.prototype.getNumbers = function() {
    return this.jerseys.map(function( jersey ) {
        return jersey.number;
    })
}

team.prototype.getJerseys = function() {
    return this.jerseys;
}

team.prototype.addJersey = function( jersey ) {
    return this.jerseys.push( jersey );
}

team.prototype.hasNumber = function( number ) {
    return this.getNumbers().indexOf( number ) > 0;
}

module.exports = team;
