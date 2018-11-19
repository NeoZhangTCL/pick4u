
var sendSearch = require("@tonybadguy/call-me-maybe")

class YelpSearch {
  
  constructor(){
    this.apiKey = 'o-T8F6a9Tybk9rllHdEPzJaNdii6SqA54ja4uUdmRW7g180Mzxde43i9koWGa8pTEYMrR5qbQFrO53d6NAM5fSVUIDJM96oPz_e1lKUMTQ0WEiBp-mKcnleJBSzqW3Yx';
    this.parameters ={
      radius:'5000',
      location: 'markham'
    };
  }

  addPara(options,data){
    this.parameters[options]=data;
    //console.log(this.parameters);
  }

  clearPara(){
    this.parameters ={
      radius:'5000'
    }
    this.parameters.location = 'markham';
    //console.log(this.parameters);
  }

  doSearch(){
    return sendSearch({
      url: 'https://api.yelp.com/v3/businesses/search',
      query: this.parameters,
      bearerToken: this.apiKey
    })}
}

module.exports = YelpSearch;