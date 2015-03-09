var assert = require("assert");
var CSVReader = require("../../src/CSVReader");

var TeamFactory = require("../factories/Team");

describe('CSVReader', function() {
    it('should read single jersey and team', function(done) {
        var jerseys = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var teams = 'test/data/one_team.csv'; // requires tests to be run from project root

        var expected_number = 7;
        var expected_name = 'Geese';

        var reader = new CSVReader({'jerseys':jerseys, 'teams':teams});
        reader.read().then(function(result) {
            assert.deepEqual(result.teams[0].name, expected_name);
            assert.deepEqual(result.jerseys[0].number, expected_number);

            done();
        });
    });

    it('should read multiple jerseys and teams', function(done) {
        var jerseys = 'test/data/ten_jerseys.csv'; // requires tests to be run from project root
        var teams = 'test/data/two_teams.csv'; // requires tests to be run from project root

        var expected_teams = [
            TeamFactory.create({name: 'Geese'}),
            TeamFactory.create({name: 'Turtles'})
        ];

        var expected_jerseys = [
            {'number': 1,'size': 's'},
            {'number': 2,'size': 'm'},
            {'number': 3,'size': 'l'},
            {'number': 4,'size': 's'},
            {'number': 5,'size': 'm'},
            {'number': 6,'size': 'l'},
            {'number': 7,'size': 's'},
            {'number': 8,'size': 'm'},
            {'number': 9,'size': 'l'},
            {'number': 10,'size': 'l'}
        ];

        var reader = new CSVReader({'jerseys':jerseys, 'teams':teams});
        reader.read().then(function(result) {
            assert.deepEqual(result.teams, expected_teams);
            assert.deepEqual(result.jerseys, expected_jerseys);

            done();
        });
    });
});
