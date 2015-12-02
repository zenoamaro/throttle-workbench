/**
 * Alias for `throttleFreq` just to satisfy the assignment ;)
 *
 * @param  {Function} fn
 * @param  {Number}   n
 * @return {Function}
 */
export function noMoreThanNTimesPerSecond(fn, n) {
    // NOTE: `frequency` has been used as the "first argument" in the
    //       actual implementation simply because it increases its
    //       usefulness when doing partial applications in functional
    //       programming.
    return throttleFreq(n, fn);
}


/**
 * This is a shortcut for throttling a function by frequency (times
 * per second) instead of by interval.
 *
 * Regular `throttle` is generally more useful in practice, so this
 * defers to that implementation instead.
 *
 * @param  {Number}   frequency
 * @param  {Function} fn
 * @return {Function}
 */
export function throttleFreq(frequency, fn) {
    const interval = 1000 / frequency; // 1/f, but in ms
    return throttle(interval, fn);
}


/**
 * Throttles a function so that it will only run once every `interval` ms.
 *
 * Returns a wrapped function that will execute the original function,
 * passing all of its arguments, and returning the result of the execution.
 *
 * If an execution has instead been throttled, the result from the last
 * execution, or the exception if it been thrown, will be returned.
 *
 * @param  {Number}   interval
 * @param  {Function} fn
 * @return {Function}
 */
export function throttle(interval, fn) {
    let lastExecution = 0;
    let lastResult;
    let lastException;

    return function throttled(...args) {
        const now = Date.now();
        const elapsed = now - lastExecution;

        if (elapsed >= interval) {
            // NOTE: This implementation, while technically correct, would
            //       lead to overlapping runs if the function takes longer
            //       than `interval` to execute. If so, check-pointing after
            //       the execution would prevent this from happening at the
            //       cost of predictability.
            lastExecution = now;

            try {
                lastResult = fn(...args);
                lastException = null;
            } catch (err) {
                lastException = err;
            }
        }

        if (lastException) throw lastException;

        // NOTE: You may want to use `null` results to detect if the
        //       function has been run or not. Also, this behavior could
        //       be a bit too surprising for the caller, so we could
        //       simply avoid storing and returning `lastResult`.
        else return lastResult;
    };
}
