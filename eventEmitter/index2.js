
/* 
    logger fucntionality -> dont involve fs module right now. 
    You have to utilise eventEmitter to handle that

    info
    error 
    log


    looger.on('info')
    looger.on('log')

*/
const EventEmitter = require('events');
class Logger extends EventEmitter{
    log(msg){
        this.emit('log', msg )
        this.emit('saveInFile', msg)
    }
    error(msg){
        this.emit('error', msg )
    }
    info(msg){
        this.emit('info', msg )
    }
}

const logger = new Logger();

logger.on('log', (msg) => {
    console.log('log:::::', msg)
})

logger.on('info', (msg) => {
    console.info('info:::::', msg)
})

logger.on('error', (msg) => {
    console.error('error:::::', msg)
})
logger.on('saveInFile', ()=>{
    //write fs module saving in a file code
})
//these are the function which you would be eventually using inside each and every function to handling the logging
//as part of the stge 2 of this assingemnt also maintain all these logs in a separate filw for which you have to use fs module
logger.log('initiate1')
logger.info('initiate2')
logger.error('initiate3')