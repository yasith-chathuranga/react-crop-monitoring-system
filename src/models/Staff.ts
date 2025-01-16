export class Staff {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    role: string;
    gender: string;
    dob: string;
    joinedDate: string;
    addressName: string;
    addressLane: string;
    addressCity: string;
    addressState: string;
    addressCode: string;
    contactNo: string;
    email: string;

    constructor(id: string, firstName: string, lastName: string, designation: string, role: string, gender: string, dob: string, joinedDate: string, addressName: string, addressLane: string, addressCity: string, addressState: string, addressCode: string, contactNo: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.role = role;
        this.gender = gender;
        this.dob = dob;
        this.joinedDate = joinedDate;
        this.addressName = addressName;
        this.addressLane = addressLane;
        this.addressCity = addressCity;
        this.addressState = addressState;
        this.addressCode = addressCode;
        this.contactNo = contactNo;
        this.email = email;
    }
}
