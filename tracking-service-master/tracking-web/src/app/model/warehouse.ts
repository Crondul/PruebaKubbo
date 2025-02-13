export class Warehouse {
    _id: number;
    _name: string;
    _city: string;

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

    public get city(): string {
        return this._city;
    }

    public set city(city: string) {
        this._city = city;
    }

}