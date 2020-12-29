export interface user {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: {[key: string]: Address};
    phone: Number;
    website: String;
    company: { [key: string]: Company }
}

export interface Address {
    street: String,
    suite: String,
    city: String,
    zipcode: Number,
}
 
export interface Geo {
    lat: Number,
    lng: Number
}
 
export interface Company {
    name: String,
    catchPhrase: String,
    bs: String
}
