var assert = require("assert");
var TeamParser = require("../../../../src/parsers/csv/Team");
var Team = require("../../../../src/Team");

describe('TeamParser', function() {
    it('should return single team from single row', function( done ) {
        var input = "Geese, 3, 2 , 7"; // include intentional spaces
        var expected_teams = [ new Team({ name: 'Geese', small_players: 3, medium_players: 2, large_players: 7 })];

        TeamParser
            .parse(input)
            .then(function(teams) {
                assert.deepEqual(teams, expected_teams);
                done();
            });
    });

    it('should return multiple teams from multiple rows', function( done ) {
        var input = "Geese, 3, 5 , 7\n" +
                    "Rodents, 2, 2, 7\n" +
                    "Dinosaurs, 3, 2, 8"; 

        var expected_teams = [ 
            new Team({ name: 'Geese', small_players: 3, medium_players: 5, large_players: 7 }),
            new Team({ name: 'Rodents', small_players: 2, medium_players: 2, large_players: 7 }),
            new Team({ name: 'Dinosaurs', small_players: 3, medium_players: 2, large_players: 8 })
        ];

        TeamParser
            .parse(input)
            .then(function(teams) {
                assert.deepEqual(teams, expected_teams);
                done();
            });
    });
});
