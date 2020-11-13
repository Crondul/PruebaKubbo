export class Stock {
    _id: number;
    _quantity: number;
    _status: string;
    _idProduct: number;
    _idWarehouse: number;
    _nameWarehouse: string;
    _cityWarehouse: string;

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get status(): string {
        return this._status;
    }

    public set status(status: string) {
        this._status = status;
    }

    public get idProduct(): number {
        return this._idProduct;
    }

    public set idProduct(idProduct: number) {
        this._idProduct = idProduct;
    }

    public get idWarehouse(): number {
        return this._idWarehouse;
    }

    public set idWarehouse(idWarehouse: number) {
        this._idWarehouse = idWarehouse;
    }

    public get nameWarehouse(): string {
        return this._nameWarehouse;
    }

    public set nameWarehouse(nameWarehouse: string) {
        this._nameWarehouse = nameWarehouse;
    }

    public get cityWarehouse(): string {
        return this._cityWarehouse;
    }

    public set cityWarehouse(cityWarehouse: string) {
        this._cityWarehouse = cityWarehouse;
    }
}