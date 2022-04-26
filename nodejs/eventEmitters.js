const EventEmitter  = require('events');

class EventLogger extends EventEmitter {
    log(data) {
        this.emit('log', {id: Date.now(), data})
    }
}

module.exports  = EventLogger;