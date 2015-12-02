export function assert(condition, error) {
    if (!condition) return error;
}


export function evaluate(test, result) {
    return {
        test,
        name: test.name.replace(/_/g, ' '),
        source: test.toString().replace(/\t/g, ''),
        passed: result == null,
        failed: result != null,
        reason: result,
    };
}


export function run(tests, done) {
    let remaining = tests.length;
    let runs = [];

    tests.forEach(function(test) {
        test(function(...args) {
            const result = assert(...args);
            runs.push(evaluate(test, result));
            if (--remaining === 0) done(null, runs);
        });
    });

    setTimeout(function() {
        if (remaining > 0) {
            done('Timeout while executing tests', runs);
        }
    }, 5000);
}
