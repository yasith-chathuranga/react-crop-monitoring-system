export class Equipment {
    equipmentId: string;
    name: string;
    type: string;
    status: string;

    constructor(equipmentId: string, name: string, type: string, status: string) {
        this.equipmentId = equipmentId;
        this.name = name;
        this.type = type;
        this.status = status;
    }
}