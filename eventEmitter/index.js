const EventEmitter = require('events');
class Emitter extends EventEmitter{}

const myFirstEvent = new Emitter();

myFirstEvent.on('checkcheck', ()=>{
    console.log('my custom event chefckchecck is called')
})
myFirstEvent.on('checkcheck', ()=>{
    console.log('will i be also called?')
})

myFirstEvent.emit('checkcheck')

