export class Field {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    fieldExtentSize: string;
    fieldImage1: string;
    fieldImage2: string;

    constructor(fieldCode: string, fieldName: string, fieldLocation: string, fieldExtentSize: string, fieldImage1: string, fieldImage2: string) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldExtentSize = fieldExtentSize;
        this.fieldImage1 = fieldImage1;
        this.fieldImage2 = fieldImage2;
    }
}