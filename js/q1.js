'use strict';

var count = 0;
function greaterThan(array, num) {
    var array = [2, 5, 9, 3];
    var num = 5;
    if (array[0] > num) {
        count= count+1;
    } else if (array[1] > num) {
        count= count+1;
    } else if (array[2] > num) {
        count= count+1;
    } else if (array[3] > num) {
        count= count+1;
    } else {
        count = 0;
    }
    console.log(count);
    return count;
}

greaterThan();

