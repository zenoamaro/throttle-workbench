import {throttle} from 'throttle';


export function it_returns_a_function(assert) {
    function handler() {}
    const throttled = throttle(1000, handler);
    assert(typeof throttled === 'function',
          `Expected function instead of "${typeof throttled}"`);
}


export function it_runs_when_called(assert) {
    let hasRun = false;
    function handler() { hasRun = true; }
    const throttled = throttle(1000, handler);
    throttled();
    assert(hasRun, `Expected function to run at least once.`);
}


export function it_does_not_swallow_exceptions(assert) {
    var hasThrown = false;
    function handler() { throw 'error'; }
    const throttled = throttle(1000, handler);
    try { throttled(); }
    catch (err) { hasThrown = true; }
    assert(hasThrown, `Expected function not to swallow the exception.`);
}


export function it_runs_throttled(assert) {
    let runs = 0;
    function handler() { runs++; }
    const throttled = throttle(500, handler);
    setTimeout(throttled,   0);
    setTimeout(throttled, 250);
    setTimeout(throttled, 500);
    setTimeout(throttled, 750);
    setTimeout(function() {
        assert(runs === 2,
              `Expected function to run twice but it ran "${runs}" times instead.`);
    }, 1000);
}


export function it_passes_parameters_and_receives_return_value(assert) {
    function handler(a, b, c) { return a + b + c; }
    const throttled = throttle(1000, handler);
    const result = throttled(1, 2, 3);
    assert(result === 6,
          `Expected function to return "6" instead of "${result}"`);
}


export function it_memoizes_return_values(assert) {
    function handler(a, b, c) { return a + b + c; }
    const throttled = throttle(1000, handler);
    const resultA = throttled(1, 2, 3);
    const resultB = throttled();
    assert(resultA === resultB,
          `Expected function to return the same value when throttled ` +
          `but it returned "${resultA}" and "${resultB}" instead.`);
}


export function it_memoizes_exceptions(assert) {
    let errors = 0;
    function handler() { throw 'err'; }
    const throttled = throttle(1000, handler);
    try { throttled(); } catch (err) { errors++; }
    try { throttled(); } catch (err) { errors++; }
    assert(errors === 2,
          `Expected function to re-throw the same error when throttled.`);
}


export function it_clears_memoized_refs(assert) {
    let runs = 0;
    let passed = 0;
    function handler() {
        switch (runs++) {
            case 0: return 1;
            case 1: throw 'err';
            case 2: return 2;
        }
    }
    const throttled = throttle(0, handler);
    if (throttled() === 1) passed++;
    try { throttled() } catch (err) { passed++; }
    if (throttled() === 2) passed++;
    assert(passed === 3,
          `Expected function to clear memoized references but it didn't.`);
}


export default [
    it_returns_a_function,
    it_runs_when_called,
    it_does_not_swallow_exceptions,
    it_runs_throttled,
    it_passes_parameters_and_receives_return_value,
    it_memoizes_return_values,
    it_memoizes_exceptions,
    it_clears_memoized_refs,
];
