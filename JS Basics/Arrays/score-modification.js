var arr = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

arr.sort(function(x, y){
    return parseInt(x) - parseInt(y);
});
arr = arr.filter(function(x){
    return (x >= 0 && x <= 400);
});

for (var index in arr){
    arr[index] = 0.8 * arr[index];
}
console.log(arr);