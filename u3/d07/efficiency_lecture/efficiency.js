var arr = [1, 1, 2, 5, 7, 8, 7, 10, 5]

function frequency(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

var result = frequency(arr);

console.log(result[0] + ' occurs ' + result[1] + ' time(s)')
