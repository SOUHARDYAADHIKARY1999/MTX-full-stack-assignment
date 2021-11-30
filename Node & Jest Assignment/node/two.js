var events=require('events');
var eventEmitter=new events.EventEmitter();

var listener1=function listener1(){
    console.log("Listener one is executed")
}

eventEmitter.on('myevent',listener1);
eventEmitter.emit('myevent');
console.log(eventEmitter.eventNames())