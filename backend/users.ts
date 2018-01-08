export class User {
    constructor(public email: string,
                public name: string,
                private password: string){}
    
    matches(another: User): boolean {
        return another !== undefined && 
               another.email === this.email && 
               another.password === this.password
    }
}

export const users: {[key: string]: User} = {
    "amanda@gmail.com": new User('amanda@gmail.com', 'Fabio', '32145'),
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', '12347')
    
}