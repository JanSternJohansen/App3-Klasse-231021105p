export class MyData
{
    private _forward: string;
    private _backward: string;

    public get forward(): string {
        return this._forward;
    }
    public set forward(value: string) {
        this._forward = value;
    }
   
    public get backward(): string {
        return this._backward;
    }
    public set backward(value: string) {
        this._backward = value;
    }
    

} 
