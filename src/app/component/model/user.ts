export class Users {
    private fullname: string;
    // private lname: string;
    private city: string;
    private mobile: number;
    private panNumber: string;
    private email: string;


    constructor(panNumber: string, city: string, fullname: string, email: string, mobile: number) {
        this.panNumber = panNumber;
        this.city = city;
        this.fullname = fullname;
        this.email = email;
        this.mobile = mobile;
    }
}

export class optVarify {
    private mobile: number;
    private otp: number;
    constructor(mobile: number, otp: number) {
        this.mobile = mobile;
        this.otp = otp;
    }
}