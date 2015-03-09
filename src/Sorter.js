var RSVP = require('rsvp');

module.exports = {
    sort: function(input) {
        var teams = input.teams;
        var jerseys = input.jerseys;

        return new RSVP.Promise(function(resolve, reject) {
            jerseys.forEach(function( jersey ) {
                var length = teams.length;

                for (var i = 0; i < length; i++) {
                    var team = teams[i];

                    if( team.needsSize( jersey.size ) && !team.hasNumber( jersey.number )) {
                        team.addJersey( jersey );
                        break;
                    }
                };
            });

            resolve(teams);
        });
    }
};
