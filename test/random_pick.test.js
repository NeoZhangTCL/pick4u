import "../src/random_pick";

describe("random pick test", function() {

    var dict = {
        "a": 2,
        "b": 3,
        "c": 5
    };
    var stats = {
        "a": 0,
        "b": 0,
        "c": 0
    };
    const epsilion = 0.0001 ;
    const limit = 100000000;
      
    it("gap between result percentage and actual percentage should be smaller than epsilion", function() {
        for (var i = 0; i < limit; i++) {
            var dict2 = Object.assign({}, dict);
            var r = random_pick(dict2);
            stats[r]++;
        }
        assert.isTrue(Math.abs(1/stats["a"] - 0.2) < epsilion, "the percentage of a should be about 0.2");
        assert.isTrue(Math.abs(1/stats["b"] - 0.3) < epsilion, "the percentage of b should be about 0.3");
        assert.isTrue(Math.abs(1/stats["c"] - 0.5) < epsilion, "the percentage of c should be about 0.5");
    });
});