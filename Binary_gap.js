function solution(N) {
 const bin = N.toString(2);
    const strArr = bin.split(1);
    console.log(strArr)
    let max = 0;
   // ignore first and last index in the array.
    for (let i = 1; i < (strArr.length - 1); i++) {
        if (strArr[i].length > max) {
            max = strArr[i].length;
        }
    }
    return max;
}
