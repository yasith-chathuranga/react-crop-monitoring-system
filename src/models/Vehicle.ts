export class Vehicle {
    vehicleCode: string;
    plateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    remarks: string;

    constructor(vehicleCode: string, plateNumber: string, vehicleCategory: string, fuelType: string, statues: string, remarks: string) {
        this.vehicleCode = vehicleCode;
        this.plateNumber = plateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = statues;
        this.remarks = remarks;
    }
}