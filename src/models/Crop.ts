export class Crop {
    cropCode: string;
    cropCommonName: string;
    cropScientificName: string;
    cropImage: string;
    category: string;
    cropSeason: string;

    constructor(cropCode: string, cropCommonName: string, cropScientificName: string, cropImage: string, category: string, cropSeason: string) {
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropImage = cropImage;
        this.category = category;
        this.cropSeason = cropSeason;
    }
}