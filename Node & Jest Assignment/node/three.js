var events =require ('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1()
{
    console.log('Listener1 is executed');
}
var listener2 = function listener1()
{
    console.log('Listener2 is executed');
}
eventEmitter.on('myevent',listener1);
eventEmitter.on('myevent',listener2);
eventEmitter.emit('myevent');
// listener count
console.log(eventEmitter.listenerCount('myevent'));

// listener name
console.log(eventEmitter.eventNames());

// remove listener
eventEmitter.removeListener('myevent',listener1);

// after math
console.log(eventEmitter.listenerCount('myevent'));

// which listener is listening
console.log(eventEmitter.listeners('myevent'));