var assert = require("assert");
var Sorter = require("../../src/Sorter");
var TeamFactory = require('../factories/Team');

describe('Sorter', function() {
    it('should add single jersey to single team', function(done) {
        var number = 3;
        var teams = [ TeamFactory.create({ 'medium_players': 1 })];
        var jerseys = [{ 'number': number, 'size': 'm' }];

        Sorter
            .sort({ 'teams': teams, 'jerseys': jerseys })
            .then(function(sorted_teams) {
                assert.deepEqual( sorted_teams[0].getNumbers(), [ number ]);
                done();
            });
    });

    it('should add multiple jerseys to single team', function(done) {
        var numbers = [3,11,47,1134];
        var teams = [ TeamFactory.create({ 'medium_players': 4 })];
        var jerseys = numbers.map(function( number ) {
            return {'number': number, 'size': 'm' };
        });

        Sorter
            .sort({ 'teams': teams, 'jerseys': jerseys })
            .then(function(sorted_teams) {
                assert.deepEqual( sorted_teams[0].getNumbers(), numbers);
                done();
            });
    });

    it('should not add duplicate jerseys to a single team', function(done) {
        var numbers = [3,11,3,20];
        var unique_numbers = [3,11,20];
        var teams = [ TeamFactory.create({ 'medium_players': 3 })];

        var jerseys = numbers.map(function( number ) {
            return {'number': number, 'size': 'm' };
        });

        Sorter
            .sort({ 'teams': teams, 'jerseys': jerseys })
            .then(function(sorted_teams) {
                assert.deepEqual( sorted_teams[0].getNumbers(), unique_numbers);
                done();
            });
    });

    it('should spread duplicate jerseys across multiple teams', function() {
        var numbers = [3,11,3,11];
        var unique_numbers = [3,11];
        var teams = [
            TeamFactory.create({ 'medium_players': 2 }),
            TeamFactory.create({ 'medium_players': 2 })
        ];

        var jerseys = numbers.map(function( number ) {
            return {'number': number, 'size': 'm' };
        });

        Sorter
            .sort({ 'teams': teams, 'jerseys': jerseys })
            .then(function(sorted_teams) {
                assert.deepEqual( sorted_teams[0].getNumbers(), unique_numbers );
                assert.deepEqual( sorted_teams[1].getNumbers(), unique_numbers );

                done();
            });
    });

    it('should not add a single jersey to multiple teams', function() {
        var number = 7;
        var teams = [
            TeamFactory.create({ 'medium_players': 2 }),
            TeamFactory.create({ 'medium_players': 2 })
        ];

        var jerseys = [{'number': number, 'size': 'm' }];
        
        Sorter
            .sort({ 'teams': teams, 'jerseys': jerseys })
            .then(function(sorted_teams) {
                assert.deepEqual( sorted_teams[0].getNumbers(), [number]);
                assert.deepEqual( sorted_teams[1].getNumbers(), [] );

                done();
            });
    });

    it('should not add jersey if size not needed', function() {
        var number = 4;
        var teams = [ TeamFactory.create({ 'medium_players': 0 })];
        var jerseys = [{ 'number': number, 'size': 'm' }];
        
        Sorter
            .sort({ 'teams': teams, 'jerseys': jerseys })
            .then(function(sorted_teams) {
                assert.notDeepEqual( sorted_teams[0].getNumbers(), [ number ]);

                done();
            });
    });
});
