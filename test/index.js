import throttleTests from './throttleTests';
import throttleFreqTests from './throttleFreqTests';
import {run} from './testUtils';

const tests = [
    ...throttleTests,
    ...throttleFreqTests,
];

export function runTests(done) {
    return run(tests, done);
}

export default tests;
