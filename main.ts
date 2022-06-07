let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let numbers2 = [];
let i = 0
while ( i < 10){
    if (numbers.indexOf(i) == -1 ){
     numbers2.push(i)

    }
    i++;

}
console.log(numbers2);