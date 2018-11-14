function random_pick(dict) {
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
for (var i = 0; i < 100000000; i++) {
    var dict2 = Object.assign({}, dict);
    var r = random_pick(dict2);
    stats[r]++;
}
console.log(stats)