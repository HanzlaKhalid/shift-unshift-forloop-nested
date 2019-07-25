var cities = ["Pakistan", "India", "Lahore", "Krachi", "Jranwala", "63 Gb"];
var lastIndex = cities.pop();
var lastIns = cities.push(prompt("Enter a city"))
var indexDel = cities.shift();
var a = cities.unshift(prompt("Enter a city"));
var c = cities[0].toUpperCase();
console.log(c);




var text = "Pakistan is a vary good";
var tex = text.replace("Pakistan", "India");
console.log(tex);




var cities = ["Pakistan", "India", "Lahore", "Krachi", "Jranwala", "63 Gb"];
for (var i = 0; i < cities.length; i++){
    for(var c = 0; c < 6; c++){
        console.log(i + "==" + cities[c])
    }
}