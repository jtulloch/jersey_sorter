var assert = require("assert");
var FileLoader = require("../../../src/util/FileLoader");
var JerseyParser = require("../../../src/parsers/csv/Jersey");
var TeamParser = require("../../../src/parsers/csv/Team");
var Team = require("../../../src/Team");

describe('FileLoader', function() {
    it('should load file contents', function(done) {
        var filename = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var expected_output = '7,m\n';

        FileLoader
            .load(filename)
            .then(function(output) {
                assert.equal(output, expected_output);
                done();
            });
    });

    it('should parse input when parser provided', function(done) {
        var filename = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var expected_output = [{number:7,size:'m'}];

        FileLoader
            .load(filename, JerseyParser)
            .then(function(output) {
                assert.deepEqual(output, expected_output);
                done();
            });
    });

    it('should parse different input when different parser provided', function(done) {
        var jerseys_filename = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var expected_jerseys = [{number:7,size:'m'}];

        var teams_filename = 'test/data/one_team.csv'; // requires tests to be run from project root
        var expected_teams = [new Team({ name: 'Geese', small_players: 3, medium_players: 5, large_players: 7 })];

        var first_call = false;
        FileLoader
            .load(jerseys_filename, JerseyParser)
            .then(function(output) {
                assert.deepEqual(output, expected_jerseys);

                if( first_call ) {
                    done();
                }
                first_call = true;
            });

        FileLoader
            .load(teams_filename, TeamParser)
            .then(function(output) {
                assert.deepEqual(output, expected_teams);

                if( first_call ) {
                    done();
                }
                first_call = true;
            });
    });
});
