var rp = require('../lib/random_pick');
var assert = require('chai').assert;

describe("random pick test", () => {

    const epsilion = 0.001 ;
    const limit = 10000000;
    const dict_sum = 10; // it has to be the sum of dict values
    const dict = {
        "a": 2,
        "b": 3,
        "c": 5
    };
    var stats = {
        "a": 0,
        "b": 0,
        "c": 0
    };
      
    it("gap between result percentage and actual percentage should be smaller than epsilion", () => {
        for (var i = 0; i < limit; i++) {
            var dict2 = Object.assign({}, dict);
            var r = rp(dict2);
            stats[r]++;
        }
        assert.isTrue(Math.abs(stats["a"]/limit - dict["a"]/dict_sum) < epsilion, "the percentage of a should be about 0.2");
        assert.isTrue(Math.abs(stats["b"]/limit - dict["b"]/dict_sum) < epsilion, "the percentage of b should be about 0.3");
        assert.isTrue(Math.abs(stats["c"]/limit - dict["c"]/dict_sum) < epsilion, "the percentage of c should be about 0.5");
    }).timeout(10000);;
});