export class UserNotSaved extends Error {
    constructor(){
        super()
        this.name = "UserNotSaved"
        this.message = `user: was not saved & will be destroyed due to`
        Object.setPrototypeOf(this, UserNotSaved.prototype);
    }
}

