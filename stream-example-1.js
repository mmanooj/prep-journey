const {Readable, Transform} = require('stream');

/**
 * Generator function to seed 10's table
 * @returns {AsyncGenerator<string, void, *>}
 */
async function* generate() {
    for(let idx = 1; idx <= 10; idx++) {
        yield (idx*10)+'';
    }
}

/**
 * Readable stream to read from the iterable generated by the generator function
 * **/
const readableStream = Readable.from(generate());

/**
 * Transform stream to read the 10's table and multiple each number by 2 on the stream
 * @type {module:stream.internal.Transform}
 */
const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, Number(chunk.toString()) * 2 + '\n');
    }
})

/**
 * Read from the generator > transform > write to console
 */
readableStream.pipe(transformStream).pipe(process.stdout);
