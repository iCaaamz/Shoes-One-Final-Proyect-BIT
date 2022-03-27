export class User{
    _id: string;
    username:string;
    email:string
    password:string;
    confirmPassword;
    permissions:any;
    islogged:boolean;
   

    constructor(
        _id="",
        username="",
        email="",
        password="",
        confirmPassword="",
        permissions={},
        islogged=false
    ){
        this._id=_id,
        this.username=username,
        this.email=email,
        this.password=password,
        this.confirmPassword=confirmPassword,
        this.permissions=permissions,
        this.islogged=islogged
    }


}