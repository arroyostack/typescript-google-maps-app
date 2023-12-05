import faker from 'faker';

class User {
    name: string;
    location: {
        latitude: number,
        longitude: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            /* 
            &  Faker library return lat and long as a string.
            & Therefore we need to implement some javascript function to parse 
            */
            latitude: parseFloat( faker.address.latitude() ),
            longitude: parseFloat( faker.address.longitude() )
        };
    }
}