var arr = ["Pesho", 2, "", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
var newArr = {};

for (var index in arr) {
    if(!isNaN(arr[index])) {
        if (newArr.hasOwnProperty(arr[index])){
            newArr[arr[index]]++;
        } else {
            newArr[arr[index]] = 1;    
        }
    }
}
var minNumber,
    maxNumber,
    mostFrequentKey;
var biggestCount = 1;

var i = 0;
for (var key in newArr) {
    key = parseInt(key);

    if (minNumber == undefined || key < minNumber) {
        minNumber = key;
    }
    if (maxNumber == undefined || key > maxNumber) {
        console.log('hello johnny');
        maxNumber = key;
    }
    if (newArr[key] > biggestCount) {
        biggestCount = newArr[key];
        mostFrequentKey = key;
    }
}

console.log("Min number: " + minNumber);
console.log("Max number: " + maxNumber);
console.log("Most frequent number: " + mostFrequentKey + " => " + biggestCount);

