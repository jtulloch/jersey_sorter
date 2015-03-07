var assert = require("assert");
var FileLoader = require("../../src/FileLoader");
var JerseyParser = require("../../src/parsers/Jersey");

describe('FileLoader', function() {
    it('should return content when no callback provided', function() {
        var filename = 'test/data/one_jersey.js'; // requires tests to be run from project root
        var expected_output = '7,m\n';

        var output = FileLoader.load(filename);

        assert.equal(output,expected_output);
    });

    it('should use callback when provided', function(done) {
        var filename = 'test/data/one_jersey.js'; // requires tests to be run from project root
        var expected_output = '7,m\n';

        FileLoader.load(filename,function(err,output) {
            assert.equal(output,expected_output);
            done();
        });
    });

    it('should parse input when parser provided', function(done) {
        var filename = 'test/data/one_jersey.js'; // requires tests to be run from project root
        var expected_output = [{number:7,size:'m'}];

        FileLoader
            .withParser(JerseyParser)
            .load(filename,function(err,output) {
                assert.deepEqual(output,expected_output);
                done();
            });
    });
});
