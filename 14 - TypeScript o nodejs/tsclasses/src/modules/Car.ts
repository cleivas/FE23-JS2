export class Car {
    private readonly doorLockCode: number;

    constructor(
        readonly make: string,
        readonly model: string,
        readonly year: number
    ){
        this.doorLockCode = this.generateCode();
    }

    private generateCode(): number{
        return Math.round(Math.random()*10000);
    }
    
}