const _test = require('tap').test;
const _Search = require('../src/search_yelp');

_test('test search function', assert =>{
    const SearchYelp = _Search();
    
    SearchYelp.doSearch().then(response => {
        assert.true(response.jsonBody.businesses);
        assert.end();
      }).catch(e =>{
        assert.fail(e);
      });


    SearchYelp.clearPara();
    SearchYelp.addPara('radius','100');

    SearchYelp.doSearch().then(response => {
        assert.true(response.jsonBody.businesses);
        assert.end();
      }).catch(e =>{
        assert.fail(e);
      });


    assert.end();
  });