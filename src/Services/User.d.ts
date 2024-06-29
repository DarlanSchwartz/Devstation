type UserAddress = {
    id: number;
    street: string;
    streetName: string;
    buildingNumber: string;
    city: string;
    zipcode: string;
    country: string;
    county_code: string;
    latitude: number;
    longitude: number;
};

export type UserData = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
    address: UserAddress;
    website: string;
    image: string;
};

export type UsersResponseDTO = {
    status: string;
    code: number;
    total: number;
    data: UserData[];
};