var assert = require("assert");
var Sorter = require("../../src/Sorter");

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

    it('should not add duplicate jerseys to a single team', function() {
        var numbers = [3,11,3,20];
        var unique_numbers = [3,11,20];
        var teams = [
            {'name': 'Hounds'}
        ];

        var jerseys = numbers.map(function( number ) {
            return {'number': number };
        });

        var sorted_teams = new Sorter()
            .withJerseys(jerseys)
            .withTeams(teams)
            .sort();

        assert.deepEqual( sorted_teams[0].getNumbers(), unique_numbers );
    })

    it('should spread duplicate jerseys across multiple teams', function() {
        var numbers = [3,11,3,11];
        var unique_numbers = [3,11];
        var teams = [
            {'name': 'Hounds'},
            {'name': 'Dinosaurs'}
        ];

        var jerseys = numbers.map(function( number ) {
            return {'number': number };
        });

        var sorted_teams = new Sorter()
            .withJerseys(jerseys)
            .withTeams(teams)
            .sort();

        assert.deepEqual( sorted_teams[0].getNumbers(), unique_numbers );
        assert.deepEqual( sorted_teams[1].getNumbers(), unique_numbers );
    })
});
