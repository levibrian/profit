export class Expense {
    
    public id: number;
    public displayName: string;
    public amount: number;
    public isPaid: boolean;

    constructor(id: number,
                displayName: string,
                amount: number,
                isPaid: boolean) {
        
        this.id = id;
        this.displayName = displayName;
        this.amount = amount;
        this.isPaid = isPaid;
    }
}