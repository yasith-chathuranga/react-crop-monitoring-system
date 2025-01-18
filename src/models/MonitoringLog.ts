export class MonitoringLog {
    logCode: string;
    logDate: string;
    logDetails: string;
    observedImage: string;

    constructor(logCode: string, logDate: string, logDetails: string, observedImage: string) {
        this.logCode = logCode;
        this.logDate = logDate;
        this.logDetails = logDetails;
        this.observedImage = observedImage;
    }
}