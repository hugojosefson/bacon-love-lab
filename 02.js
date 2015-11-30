export default (Bacon, promise, eventTarget, callback) => ({
    promise: Bacon.fromPromise(promise),
    eventTarget: Bacon.fromEvent(eventTarget, 'data'),
    callback: Bacon.fromCallback(callback, 'foo', 'bar'),
    array: Bacon.fromArray([1, 2, 3, 4])
})
