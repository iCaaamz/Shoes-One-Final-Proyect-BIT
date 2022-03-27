export class product{
    _id:string;
    price:number;
    availableElemnts: number;
    description: string;
    image: string;

    constructor(
        _id:"",
        price:0,
        availableElemnts: 0,
        description: "",
        image: ""

    ){
       this._id=_id,
       this.price=price,
       this.availableElemnts=availableElemnts,
       this.description=description,
       this.image=image
    }

}