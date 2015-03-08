var assert = require("assert");
var Formatter = require("../../../src/util/TeamStringFormatter");
var Team = require("../../../src/Team");

describe('TeamStringFormatter', function() {
    it('Format team with numbers', function() {
        var jerseys = [
            { number: 1, size: 'm' },
            { number: 7, size: 'm' },
            { number: 4, size: 'm' },
            { number: 3, size: 'm' }
        ];

        var team = new Team({ name: 'Bengals', medium_players: 5, jerseys: jerseys });
        var output = Formatter.format(team);

        assert.equal( output, "Bengals - 1,7,4,3" );
    });
});

