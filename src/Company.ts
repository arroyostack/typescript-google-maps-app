import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        latitude: number,
        longitude: number;
    };
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            /* 
            &  Faker library return lat and long as a string.
            & Therefore we need to implement some javascript function to parse 
            */
            latitude: parseFloat( faker.address.latitude() ),
            longitude: parseFloat( faker.address.longitude() )
        };
    }

    markerContent() {
        return `
        <h1>${this.companyName}</h1>
        <br>
        <h3>${this.catchPhrase}</h3>
        `;
    }
}