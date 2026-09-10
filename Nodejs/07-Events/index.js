const EventEmitter = require("events")

const emitter = new EventEmitter();

// To make an Event we have 2 keywords that should be write together to make and execute an event.

// 1- on (eventName, Listener or eventCallback) -- to create event
// 2- emit(eventName , [args]) -- to execute event 

// Create an event to say Hello 

emitter.on("GREET", (args)=> {
      console.log(`Hello ${args.username} your id is ${args.id} and passward is ${args.passward}`)
})   // thats how we can pass multiples arguments 

emitter.emit("GREET",{
    username : "Grv",
    id : "1jknsfkladkt78877",
    passward : "ryrtg@17433"
})