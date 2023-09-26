//enums ex1
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

//enums ex2
enum Car {
  Toyota = "toyota",
  Mercedes = "mercedes",
}

//enums ex3
enum Engine {
  diesel = "diesel",
  gas = "gas",
}

const benz = {
  color: Color.Red,
  carType: Car.Mercedes,
  engineType: Engine.diesel,
};

const toyota = {
  color: Color.Green,
  carType: Car.Toyota,
  engineType: Engine.gas,
};

// enum ex4
enum LoyaltyUser {
  GOLD_USER = "GOLD USER",
  SILVER_USER = "SILVER USER",
  BRONZE_USER = "BRONZE USER",
}

//interface
interface Rating {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  // loyaltyUser: string;
  date: string;
}

const rating: Rating[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

//any. This is used when not sure of the data type
const stats: any = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    desc: "lorem ispun sonm", // "any" in action
  },
];

//union
function show(identity: string | number | boolean) {
  return identity;
}
