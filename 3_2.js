function countFromArr(list) {
    let result = {};
    let previous = [];
    let count;
    for(let i = 0; i < list.length; i++) {
        count = 0;
        if (!previous.includes(list[i])) {
            previous.push(list[i]);
            for(let j=i; j < list.length; j++) {
                if(list[i] === list[j]) {
                    count++;
                }
            }
        result[list[i]] = count;
        }
    }
    return result;
}
    
const arr = [1, 1, 1, 'test', 'test'];
const res = countFromArr(arr);
console.log(res); // { 1: 3, test: 2 }