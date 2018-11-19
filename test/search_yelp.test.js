var _Search = require('../src/search_yelp');
var assert = require('chai').assert;

describe('Yelpsearch test', () => {
    const SearchYelp = new _Search();

    afterEach(() => {
        SearchYelp.clearPara();
    });
    
    it("Test with default parameters: ", () =>{
        return SearchYelp.doSearch().then(response => {
            console.log("first attemp total: " + response.jsonBody.total)
            assert.isAtLeast(response.jsonBody.total,600,'> 100 coerces values to strings');
        });
    });
    
    it("Test with default parameters: ", () =>{
        SearchYelp.addPara('radius','100');
        return SearchYelp.doSearch().then(response => {
            console.log("Second attemp total: " + response.jsonBody.total)
            assert.isAtLeast(response.jsonBody.total,2,'> 2 coerces values to strings');
        });
    });
});