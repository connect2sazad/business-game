import Colors from "./colors"

// red places from 1 to 5
const RedPlaces = [
    {
        id: 1,
        name: "Mumbai",
        color: Colors.red,
        price: 8500,
        rent: 1200,
        rent_1: 4000,
        rent_2: 5500,
        rent_3: 7500,
        rent_hotel: 9000,
        cost_house: 7500,
        cost_hotel: 7500,
        bank_mortage: 4250
    },
    {
        id: 2,
        name: "Ahmedabad",
        color: Colors.red,
        price: 4000,
        rent: 400,
        rent_1: 1500,
        rent_2: 3000,
        rent_3: 4200,
        rent_hotel: 5000,
        cost_house: 4500,
        cost_hotel: 4500,
        bank_mortage: 2000
    },
    {
        id: 3,
        name: "Darjeeling",
        color: Colors.red,
        price: 2500,
        rent: 200,
        rent_1: 1200,
        rent_2: 2600,
        rent_3: 3500,
        rent_hotel: 5000,
        cost_house: 3000,
        cost_hotel: 3000,
        bank_mortage: 1250
    },
    {
        id: 4,
        name: "Kolkata",
        color: Colors.red,
        price: 6500,
        rent: 800,
        rent_1: 3200,
        rent_2: 4500,
        rent_3: 6500,
        rent_hotel: 8000,
        cost_house: 6000,
        cost_hotel: 6000,
        bank_mortage: 3250
    },
    {
        id: 5,
        name: "Hyderabad",
        color: Colors.red,
        price: 3500,
        rent: 300,
        rent_1: 1200,
        rent_2: 3000,
        rent_3: 4500,
        rent_hotel: 6000,
        cost_house: 5000,
        cost_hotel: 5000,
        bank_mortage: 1750
    }
]

// blue places from 6 to 10
const BluePlaces = [
    {
        id: 6,
        name: "Indore",
        color: Colors.blue,
        price: 1500,
        rent: 200,
        rent_1: 600,
        rent_2: 1500,
        rent_3: 2500,
        rent_hotel: 3600,
        cost_house: 2000,
        cost_hotel: 2000,
        bank_mortage: 750
    },
    
]

const GreenPlaces = [
    {
        id: 11,
        name: "Delhi",
        color: Colors.green,
        price: 6000,
        rent: 750,
        rent_1: 3000,
        rent_2: 4300,
        rent_3: 5500,
        rent_hotel: 7500,
        cost_house: 5000,
        cost_hotel: 5000,
        bank_mortage: 3000
    },
    {
        id: 12,
        name: "Chandigarh",
        color: Colors.green,
        price: 2500,
        rent: 200,
        rent_1: 900,
        rent_2: 1600,
        rent_3: 2500,
        rent_hotel: 3500,
        cost_house: 3000,
        cost_hotel: 3000,
        bank_mortage: 1250
    },
    {
        id: 13,
        name: "Goa",
        color: Colors.green,
        price: 4000,
        rent: 400,
        rent_1: 1500,
        rent_2: 3000,
        rent_3: 4500,
        rent_hotel: 5500,
        cost_house: 4500,
        cost_hotel: 4500,
        bank_mortage: 2000
    },
    {
        id: 14,
        name: "Cochin",
        color: Colors.green,
        price: 3000,
        rent: 300,
        rent_1: 1200,
        rent_2: 2000,
        rent_3: 4250,
        rent_hotel: 5500,
        cost_house: 4000,
        cost_hotel: 4000,
        bank_mortage: 1500
    },
    {
        id: 15,
        name: "Mysore",
        color: Colors.green,
        price: 2500,
        rent: 200,
        rent_1: 1000,
        rent_2: 2250,
        rent_3: 3500,
        rent_hotel: 3000,
        cost_house: 3000,
        cost_hotel: 3000,
        bank_mortage: 1250
    }
]

const YellowPlaces = [
    {

    }
]

const PinkPlaces = [
    {

    }
]

const Places = [
    ...RedPlaces,
    ...BluePlaces,
    ...GreenPlaces,
    ...YellowPlaces,
    ...PinkPlaces
]

export default Places;