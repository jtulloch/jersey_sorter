var assert = require("assert");
var FileLoader = require("../../src/FileLoader");
var JerseyParser = require("../../src/parsers/Jersey");
var TeamParser = require("../../src/parsers/Team");
var Team = require("../../src/Team");

describe('FileLoader', function() {
    it('should return content when no callback provided', function() {
        var filename = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var expected_output = '7,m\n';

        var output = FileLoader.load(filename);

        assert.equal(output,expected_output);
    });

    it('should use callback when provided', function(done) {
        var filename = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var expected_output = '7,m\n';

        FileLoader.load(filename,function(err,output) {
            assert.equal(output,expected_output);
            done();
        });
    });

    it('should parse input when parser provided', function(done) {
        var filename = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var expected_output = [{number:7,size:'m'}];

        FileLoader
            .withParser(JerseyParser)
            .load(filename,function(err,output) {
                assert.deepEqual(output,expected_output);
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
            .withParser(JerseyParser)
            .load(jerseys_filename,function(err,output) {
                assert.deepEqual(output,expected_jerseys);

                if( first_call ) {
                    done();
                }
                first_call = true;
            });

        FileLoader
            .withParser(TeamParser)
            .load(teams_filename,function(err,output) {
                assert.deepEqual(output,expected_teams);
                if( first_call ) {
                    done();
                }
                first_call = true;
            });
    });
});
