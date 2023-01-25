var ask = +prompt("Введіть число:");
const arr = [];

while (ask == '' || isNaN(ask)) {
    alert("Це було не число, спробуй ще раз");
    ask = +prompt("Введіть число:"); 
}

do {
    arr.unshift(Math.floor(Math.random() * 100));
} while (arr.length < ask);

console.log(arr);

let sum = 0;
for (let blocks of arr) {
    sum += blocks;
}

console.log(sum);
