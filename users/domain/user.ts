export class User {
    constructor(
        readonly name: string,
        readonly lastName: string,
        readonly email: string,
        readonly profesion: string,
        readonly empresa: string,
        readonly pais: string,
        readonly role: string
    ){}
}

export enum ERole {
    "Newsletter" = "Newsletter",
   
}