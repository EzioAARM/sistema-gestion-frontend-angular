export class User {
    public country : string;
    public phone : string;
    public imgUrl : string;
    public createdDate : Date;
    public lastLogin : Date;
    public activated : boolean;
    public active : boolean;
    
    constructor(
        public name : string,
        public lastName : string,
        public email : string,
        public username : string,
        public password : string
    ) {

    }
}