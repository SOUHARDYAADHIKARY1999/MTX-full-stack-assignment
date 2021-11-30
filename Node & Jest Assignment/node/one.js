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
//eventEmitter.emit('myevent');
eventEmitter.emit('myevent');
