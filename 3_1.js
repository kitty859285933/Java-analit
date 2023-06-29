function convertArrToObj(list) {
    let result = {};
    for (let i = 0; i < list.length; i++) {
        result[i] = list[i];
    }
    return result;
}
    
const arr = [1, null, 'test', undefined];
const obj = convertArrToObj(arr);
console.log(obj); // { 0: 1, 1: null, 2: 'test', 3: undefined }