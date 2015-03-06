var assert = require("assert")
var Sorter = require("../../src/Sorter")

describe('Sorter', function() {
    it('should add single jersey to single team', function() {
        var number = 3;
        var teams = [{'name': 'Hounds'}];
        var jerseys = [{'number': number }];

        var sorted_teams = new Sorter()
            .withJerseys(jerseys)
            .withTeams(teams)
            .sort();

        assert.deepEqual( sorted_teams[0].getNumbers(), [ number ]);
    })

    it('should add multiple jerseys to single team', function() {
        var numbers = [3,11,47,1134];
        var teams = [{'name': 'Hounds'}];
        var jerseys = numbers.map(function( number ) {
            return {'number': number };
        });

        var sorted_teams = new Sorter()
            .withJerseys(jerseys)
            .withTeams(teams)
            .sort();

        assert.deepEqual( sorted_teams[0].getNumbers(), numbers );
    })
});
