var list = [1, 67, 7, 9, 9, 7, 6, 3, 2, 3, 5, 6, 67, 8, 6, 9, 68, 7, 4, 1, 46, 68, 58, 98, 63];
list.sort(function (e1, e2) {
    return e1 - e2;
});
list.reverse();
console.log(list);
var list1 = list.slice(0, 5);
var list2 = list.slice(list.length - 5);
console.log(list1);
console.log(list2);
var sum = 0;
for (var i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        sum += list[i];
    }
}
console.log(sum);
var listHundred = [];
for (var i = 0; i <= 100; i++) {
    listHundred.push(i);
}
console.log(listHundred);