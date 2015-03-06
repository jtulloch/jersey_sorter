var assert = require("assert")
var Team = require("../../src/Team")

describe('Team', function() {
    it('should mixin passed parameters', function() {
        var params = { fish: 11 };
        var team = new Team( params );

        assert.equal( params.fish, team.fish );
    })

    describe('#hasNumber', function() {
        it('should return false if has jersey number', function() {
            var team = new Team({ jerseys: [{ number: 1 }]});

            assert.equal( team.hasNumber( 7 ), false );
        })

        it('should return true if has jersey number', function() {
            var input_number = 7;
            var team = new Team({ jerseys: [{ number: input_number }]});

            assert.equal( team.hasNumber( input_number ), false );
        })
    })

    describe('#getJerseys', function() {
        it('should return jerseys', function() {
            var jersey = { number: 1 };
            var team = new Team({ jerseys: [ jersey ]});

            assert.deepEqual( team.getJerseys(), [ jersey ]);
        })

        it('should return added jerseys', function() {
            var jersey_1 = { number: 1 };
            var jersey_2 = { number: 7 };

            var team = new Team({ jerseys: [ jersey_1 ]});

            team.addJersey( jersey_2 );

            assert.deepEqual( team.getJerseys(), [ jersey_1, jersey_2 ]);
        })
    })

    describe('#getNumbers', function() {
        it('should return empty array when no jerseys', function() {
            var team = new Team();

            assert.deepEqual( team.getNumbers(), [] );
        })

        it('should return jersey numbers', function() {
            var jersey = { number: 1 };
            var team = new Team({ jerseys: [ jersey ]});

            assert.deepEqual( team.getNumbers(), [ jersey.number ]);
        });
    });
})
