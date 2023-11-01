/**
 * Asynchronous implementation of a Delay function
 * @param ts timestamps in milliseconds
 * @returns {Promise<unknown>}
 */
async function delay(ts) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ts);
    });
}

console.log(`Begin: ${Date.now()}`)
delay(1000).then(res => {
    console.log(`waited one sec, end: ${Date.now()}`)
})