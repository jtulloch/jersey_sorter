var assert = require("assert");
var TeamParser = require("../../../src/parsers/Team");
var Team = require("../../../src/Team");

describe('Team Parser', function() {
    it('should return single team from single row', function( done ) {
        var input = " name, small_players, medium_players, large_players\nGeese, 3, 2, 7"; // include intentional spaces
        var expected_teams = [ new Team({ name: 'Geese', small_players: 3, medium_players: 2, large_players: 7 })];

        TeamParser.parse(input,function( teams ) {
            assert.deepEqual( teams, expected_teams );
            done();
        });
    });
});
