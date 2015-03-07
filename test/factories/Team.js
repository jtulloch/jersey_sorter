var Team = require('../../src/Team');

var default_attributes = {
    name: 'Dinosaurs', // not unique
    small_players: 0,
    medium_players: 0,
    large_players: 0
};

// Not recursive
var mixin = function( to, from ) {
    for( var key in from ) {
        to[key] = from[key];
    }
};

module.exports = {
    create: function( attributes ) {
        mixin( default_attributes, attributes || {} );
        return new Team( default_attributes );
    }
};
