export class Product {
    _id: number;
    _name: string;
    _sku: string;
    _barcode: string;
    _image: string;
    _price: string;
    _enabled: boolean;

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get sku(): string {
        return this._sku;
    }

    public set sku(sku: string) {
        this._sku = sku;
    }

    public get barcode(): string {
        return this._barcode;
    }

    public set barcode(barcode: string) {
        this._barcode = barcode;
    }

    public get image(): string {
        return this._image;
    }

    public set image(image: string) {
        this._image = image;
    }

    public get price(): string {
        return this._price;
    }

    public set price(price: string) {
        this._price = price;
    }

    public get enabled(): boolean {
        return this._enabled;
    }

    public set enabled(enabled: boolean) {
        this._enabled = enabled;
    }
}