class youtubeChannel{
    constructor(){
       this.subscribers = []
    }
    subscribe(user){
        this.subscribers.push(user)
        user.update(`You have subscribed the channel `)
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter((sub)=> sub!== user)
        user.update(`You have un-subsscribed the channel`)
    }
    notify(message){
        this.subscribers.forEach((sub) => sub.update(message))
    } 
}

class User{
 constructor(name){
    this.name = name
 }
 update(data){
   console.log(`${this.name}, ${data}`)
 }
}

let coderChannelName = new youtubeChannel();
let user1 = new User("gaurav")

coderChannelName.subscribe(user1)
coderChannelName.notify(`we are closing the channel bcz its april 1st`)