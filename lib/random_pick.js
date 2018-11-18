// random_pick.js

module.exports = function(dict) {
    var weight = 0;
    var rest;
    for (rest in dict) {
        weight += dict[rest]
        dict[rest] = weight
    }
    var random_num = Math.floor((Math.random() * weight));
    // console.log(random_num);
    for (rest in dict) {
        if (random_num < dict[rest]) {
            return rest
        }
    }
}
