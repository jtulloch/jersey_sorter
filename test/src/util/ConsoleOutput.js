var assert = require("assert")
var simple = require("simple-mock");

var ConsoleOutput = require('../../../src/util/ConsoleOutput');

describe('ConsoleOutput', function() {
    it('should call formatter once', function() {
        var test_team = {name: 'Lizards'};
        var spy = simple.stub();
        var mock_formatter = {
            format: spy
        };

        var output = new ConsoleOutput(mock_formatter);

        output.send([test_team]);

        assert(spy.called);
        assert.equal(spy.calls[0].args[0],test_team);
    });
});
