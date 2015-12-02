/**
 * Alias for `throttleFreq` just to satisfy the assignment ;)
 *
 * @param  {Function} fn
 * @param  {Number}   n
 * @return {Function}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noMoreThanNTimesPerSecond = noMoreThanNTimesPerSecond;
exports.throttleFreq = throttleFreq;
exports.throttle = throttle;

function noMoreThanNTimesPerSecond(fn, n) {
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

function throttleFreq(frequency, fn) {
    var interval = 1000 / frequency; // 1/f, but in ms
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

function throttle(interval, fn) {
    var lastExecution = 0;
    var lastResult = undefined;
    var lastException = undefined;

    return function throttled() {
        var now = Date.now();
        var elapsed = now - lastExecution;

        if (elapsed >= interval) {
            // NOTE: This implementation, while technically correct, would
            //       lead to overlapping runs if the function takes longer
            //       than `interval` to execute. If so, check-pointing after
            //       the execution would prevent this from happening at the
            //       cost of predictability.
            lastExecution = now;

            try {
                lastResult = fn.apply(undefined, arguments);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aHJvdHRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT08sU0FBUyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFOzs7OztBQUs3QyxXQUFPLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDOUI7Ozs7Ozs7Ozs7Ozs7O0FBY00sU0FBUyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRTtBQUN4QyxRQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ2xDLFdBQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztDQUNqQzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTSxTQUFTLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFO0FBQ25DLFFBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN0QixRQUFJLFVBQVUsWUFBQSxDQUFDO0FBQ2YsUUFBSSxhQUFhLFlBQUEsQ0FBQzs7QUFFbEIsV0FBTyxTQUFTLFNBQVMsR0FBVTtBQUMvQixZQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdkIsWUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQzs7QUFFcEMsWUFBSSxPQUFPLElBQUksUUFBUSxFQUFFOzs7Ozs7QUFNckIseUJBQWEsR0FBRyxHQUFHLENBQUM7O0FBRXBCLGdCQUFJO0FBQ0EsMEJBQVUsR0FBRyxFQUFFLDRCQUFTLENBQUM7QUFDekIsNkJBQWEsR0FBRyxJQUFJLENBQUM7YUFDeEIsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNWLDZCQUFhLEdBQUcsR0FBRyxDQUFDO2FBQ3ZCO1NBQ0o7O0FBRUQsWUFBSSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OzthQU1sQyxPQUFPLFVBQVUsQ0FBQztLQUMxQixDQUFDO0NBQ0wiLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFsaWFzIGZvciBgdGhyb3R0bGVGcmVxYCBqdXN0IHRvIHNhdGlzZnkgdGhlIGFzc2lnbm1lbnQgOylcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge051bWJlcn0gICBuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vTW9yZVRoYW5OVGltZXNQZXJTZWNvbmQoZm4sIG4pIHtcbiAgICAvLyBOT1RFOiBgZnJlcXVlbmN5YCBoYXMgYmVlbiB1c2VkIGFzIHRoZSBcImZpcnN0IGFyZ3VtZW50XCIgaW4gdGhlXG4gICAgLy8gICAgICAgYWN0dWFsIGltcGxlbWVudGF0aW9uIHNpbXBseSBiZWNhdXNlIGl0IGluY3JlYXNlcyBpdHNcbiAgICAvLyAgICAgICB1c2VmdWxuZXNzIHdoZW4gZG9pbmcgcGFydGlhbCBhcHBsaWNhdGlvbnMgaW4gZnVuY3Rpb25hbFxuICAgIC8vICAgICAgIHByb2dyYW1taW5nLlxuICAgIHJldHVybiB0aHJvdHRsZUZyZXEobiwgZm4pO1xufVxuXG5cbi8qKlxuICogVGhpcyBpcyBhIHNob3J0Y3V0IGZvciB0aHJvdHRsaW5nIGEgZnVuY3Rpb24gYnkgZnJlcXVlbmN5ICh0aW1lc1xuICogcGVyIHNlY29uZCkgaW5zdGVhZCBvZiBieSBpbnRlcnZhbC5cbiAqXG4gKiBSZWd1bGFyIGB0aHJvdHRsZWAgaXMgZ2VuZXJhbGx5IG1vcmUgdXNlZnVsIGluIHByYWN0aWNlLCBzbyB0aGlzXG4gKiBkZWZlcnMgdG8gdGhhdCBpbXBsZW1lbnRhdGlvbiBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gICBmcmVxdWVuY3lcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZUZyZXEoZnJlcXVlbmN5LCBmbikge1xuICAgIGNvbnN0IGludGVydmFsID0gMTAwMCAvIGZyZXF1ZW5jeTsgLy8gMS9mLCBidXQgaW4gbXNcbiAgICByZXR1cm4gdGhyb3R0bGUoaW50ZXJ2YWwsIGZuKTtcbn1cblxuXG4vKipcbiAqIFRocm90dGxlcyBhIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCBvbmx5IHJ1biBvbmNlIGV2ZXJ5IGBpbnRlcnZhbGAgbXMuXG4gKlxuICogUmV0dXJucyBhIHdyYXBwZWQgZnVuY3Rpb24gdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLFxuICogcGFzc2luZyBhbGwgb2YgaXRzIGFyZ3VtZW50cywgYW5kIHJldHVybmluZyB0aGUgcmVzdWx0IG9mIHRoZSBleGVjdXRpb24uXG4gKlxuICogSWYgYW4gZXhlY3V0aW9uIGhhcyBpbnN0ZWFkIGJlZW4gdGhyb3R0bGVkLCB0aGUgcmVzdWx0IGZyb20gdGhlIGxhc3RcbiAqIGV4ZWN1dGlvbiwgb3IgdGhlIGV4Y2VwdGlvbiBpZiBpdCBiZWVuIHRocm93biwgd2lsbCBiZSByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgaW50ZXJ2YWxcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShpbnRlcnZhbCwgZm4pIHtcbiAgICBsZXQgbGFzdEV4ZWN1dGlvbiA9IDA7XG4gICAgbGV0IGxhc3RSZXN1bHQ7XG4gICAgbGV0IGxhc3RFeGNlcHRpb247XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdGhyb3R0bGVkKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIGxhc3RFeGVjdXRpb247XG5cbiAgICAgICAgaWYgKGVsYXBzZWQgPj0gaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaW1wbGVtZW50YXRpb24sIHdoaWxlIHRlY2huaWNhbGx5IGNvcnJlY3QsIHdvdWxkXG4gICAgICAgICAgICAvLyAgICAgICBsZWFkIHRvIG92ZXJsYXBwaW5nIHJ1bnMgaWYgdGhlIGZ1bmN0aW9uIHRha2VzIGxvbmdlclxuICAgICAgICAgICAgLy8gICAgICAgdGhhbiBgaW50ZXJ2YWxgIHRvIGV4ZWN1dGUuIElmIHNvLCBjaGVjay1wb2ludGluZyBhZnRlclxuICAgICAgICAgICAgLy8gICAgICAgdGhlIGV4ZWN1dGlvbiB3b3VsZCBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYXQgdGhlXG4gICAgICAgICAgICAvLyAgICAgICBjb3N0IG9mIHByZWRpY3RhYmlsaXR5LlxuICAgICAgICAgICAgbGFzdEV4ZWN1dGlvbiA9IG5vdztcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsYXN0UmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgbGFzdEV4Y2VwdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXhjZXB0aW9uID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RFeGNlcHRpb24pIHRocm93IGxhc3RFeGNlcHRpb247XG5cbiAgICAgICAgLy8gTk9URTogWW91IG1heSB3YW50IHRvIHVzZSBgbnVsbGAgcmVzdWx0cyB0byBkZXRlY3QgaWYgdGhlXG4gICAgICAgIC8vICAgICAgIGZ1bmN0aW9uIGhhcyBiZWVuIHJ1biBvciBub3QuIEFsc28sIHRoaXMgYmVoYXZpb3IgY291bGRcbiAgICAgICAgLy8gICAgICAgYmUgYSBiaXQgdG9vIHN1cnByaXNpbmcgZm9yIHRoZSBjYWxsZXIsIHNvIHdlIGNvdWxkXG4gICAgICAgIC8vICAgICAgIHNpbXBseSBhdm9pZCBzdG9yaW5nIGFuZCByZXR1cm5pbmcgYGxhc3RSZXN1bHRgLlxuICAgICAgICBlbHNlIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH07XG59XG4iXX0=