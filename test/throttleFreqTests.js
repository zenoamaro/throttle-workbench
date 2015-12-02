import {throttleFreq} from 'throttle';
import {noMoreThanNTimesPerSecond} from 'throttle';


export function it_throttles_by_frequency(assert) {
    let runs = 0;
    function handler() { runs++; }
    const throttled = throttleFreq(2, handler);
    setTimeout(throttled,   0);
    setTimeout(throttled, 250);
    setTimeout(throttled, 500);
    setTimeout(throttled, 750);
    setTimeout(function() {
        assert(runs === 2,
              `Expected function to run twice but it ran "${runs}" times instead.`);
    }, 1000);
}


export function it_runs_at_most_n_times_per_second(assert) {
    let runs = 0;
    function handler() { runs++; }
    const throttled = noMoreThanNTimesPerSecond(handler, 2);
    setTimeout(throttled,   0);
    setTimeout(throttled, 250);
    setTimeout(throttled, 500);
    setTimeout(throttled, 750);
    setTimeout(function() {
        assert(runs === 2,
              `Expected function to run twice but it ran "${runs}" times instead.`);
    }, 1000);
}


export default [
    it_throttles_by_frequency,
    it_runs_at_most_n_times_per_second,
];
