var assert = require("assert");
var JerseyParser = require("../../../../src/parsers/csv/Jersey");

describe('Jersey Parser', function() {
    it('should return single jersey from single row', function( done ) {
        var input = " 7, m"; // include intentional spaces
        var expected_jerseys = [{ number: 7, size: 'm' }];

        JerseyParser
            .parse(input)
            .then(function(jerseys) {
                assert.deepEqual(jerseys, expected_jerseys);
                done();
            });
    });

    it('should return multiple jerseys from multiple rows', function( done ) {
        var input = "7,m \n" +
                    "3,l \n" +
                    "20,s"

        var expected_jerseys = [ 
            { number: 7, size: 'm' },
            { number: 3, size: 'l' },
            { number: 20, size: 's' }
        ];

        JerseyParser
            .parse(input)
            .then(function(jerseys) {
                assert.deepEqual(jerseys, expected_jerseys);
                done();
            });
    });
});
