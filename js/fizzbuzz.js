// FizzBuzz
// For range of numbers 1 - 100, print
// 	1. 'Fizz' when multiple of 3
// 	2. 'Buzz' when multiple of 5
// 	3. 'FizzBuzz' when multiple of 3 & 5
// 	4. Number itself if none of the above
// Enhancements:
// 	1. Print 'Foo' when multiple of 7, 'Bar' when multiple of 11
// 2. Print for set of non-contiguous input numbers


const multiplesToStr = {
    3: 'Fizz',
    5: 'Buzz',
    7: 'Foo',
    11: 'Bar',
}

function fizzbuzz(range) {
    for (let num = 1; num <= range; num++) {
        let res = '';

        for (let [mul, str] of Object.entries(multiplesToStr)) {
            if (num % mul === 0) {
                res += str;
            }
        }
        if (res === '') {
            res = num;
        }
        console.log(`${num}>${res}`);
    }
}

fizzbuzz(100);