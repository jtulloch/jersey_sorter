var assert = require("assert");
var CSVFileSorter = require("../../src/CSVFileSorter");

describe('CSVFileSorter', function() {
    it('should add single jersey to single team', function(done) {
        var jerseys = 'test/data/one_jersey.csv'; // requires tests to be run from project root
        var teams = 'test/data/one_team.csv'; // requires tests to be run from project root

        var expected_number = 7;

        var sorter = new CSVFileSorter()
            .jerseys(jerseys)
            .teams(teams)
            .callback(function(err,output) {
                assert.deepEqual( output[0].getNumbers(), [ expected_number ]);
                done();
            });

        sorter.sort();
    })

    it('should add multiple jerseys to multiple teams', function(done) {
        var jerseys = 'test/data/ten_jerseys.csv'; // requires tests to be run from project root
        var teams = 'test/data/two_teams.csv'; // requires tests to be run from project root

        var expected_first_team = [1,2,3,4,6];
        var expected_second_team = [5,7,8,9,10];

        var sorter = new CSVFileSorter()
            .jerseys(jerseys)
            .teams(teams)
            .callback(function(err,output) {
                assert.deepEqual( output[0].getNumbers(), expected_first_team);
                assert.deepEqual( output[1].getNumbers(), expected_second_team);
                done();
            });

        sorter.sort();
    })
});
