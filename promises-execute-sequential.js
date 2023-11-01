/**
 * Function to execute promises sequentially using array.reduce
 * Capture the result/error from promises into a resulting array and returns it
 * Does not fail/stop execution if any of the promises fail
 * @param promisesArr
 * @returns {Promise<*[]>}
 */
async function runPromisesSequential(promisesArr) {
    const results = [];
    await promisesArr.reduce((acc, promise) => {
        return acc.then(() => promise)
            .then(res => results.push(res))
            .catch(err => results.push(err));
    }, Promise.resolve());
    return results;
}

runPromisesSequential([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(res => console.log(res));
runPromisesSequential([Promise.resolve(1), Promise.reject('err'), Promise.resolve(3)]).then(res => console.log(res));