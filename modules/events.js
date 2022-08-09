const EventEmitter = require('events');


// EventEmitterdan meros olish
class NewEmitter extends EventEmitter {}

//Instance object
const newEmitter = new NewEmitter();

//Event Listener
newEmitter.on('hello', ()=>{
    console.log('Hello World');
})


//Receiving
newEmitter.emit('hello')