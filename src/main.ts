class MainProp {
  src: string;
  title: string;
  reviews: Reviews[];

  constructor(src: string, title: string, reviews: Reviews[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

//enum
enum LoyalUser {
  GOLD_USER = "GOLD USER",
  SILVER_USER = "SILVER USER",
  BRONZE_USER = "BRONZE USER",
}

//interface
interface Reviews {
  name: string;
  stars: number;
  loyaltyUser: LoyalUser;
  date: string;
}

//literals (aliases)
type Price = 45 | 30 | 25;
type nations = "Colombia" | "Nigeria" | "USA";

// interface
interface Properties {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string | number; // union
    code: number;
    country: nations;
  };
  contact: [number, string]; //tuple
  isAvailable: boolean;
}

// array of objects & applying interface
const properties: Properties[] = [
  //applying interface
  {
    image: "./images/b1.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1122333, "marywinkle@gmail.com"], //tuple
    isAvailable: true,
  },
  {
    image: "./images/b2.jpg",
    title: "Lekki Shack",
    price: 30,
    location: {
      firstLine: "shack 50",
      city: "Cruz",
      code: 45600,
      country: "Nigeria",
    },
    contact: [+11145633, "mary@gmail.com"],
    isAvailable: false,
  },
  {
    image: "./images/b3.jpg",
    title: "Trump Avenue",
    price: 25,
    location: {
      firstLine: "RoboCrizue",
      city: "New York",
      code: 90632,
      country: "USA",
    },
    contact: [+56442233, "paul@gmail.com"],
    isAvailable: true,
  },
];

// array of objects & applying interface
const reviews: Reviews[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyalUser.BRONZE_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyalUser.GOLD_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyalUser.SILVER_USER,
    date: "27-03-2021",
  },
];

let myMainProp = new MainProp("./images/b1.jpg", "Sofa", [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyalUser.BRONZE_USER,
    date: "01-04-2021",
  },
]); 

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;

const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLElement;

const userNameDisplay = document.querySelector("#user") as HTMLElement;
const propertyContainer = document.querySelector(".properties") as HTMLElement;
const footer = document.querySelector(".footer") as HTMLElement;

function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyalUser
) {
  const displaySign = isLoyalty && `${reviews[1].loyaltyUser}`;
  reviewTotalDisplay.innerHTML =
    value.toString() +
    " Total reviews " +
    " | last reviewed by " +
    reviewer +
    ", a " +
    displaySign;
}

showReviewTotal(reviews.length, reviews[2].name, reviews[0].loyaltyUser);

const you: {
  firstName: string;
  lastName: string;
  returningStatus: boolean;
  stayedAt: (string | number | boolean | object)[]; //union
  car: object; // object
} = {
  firstName: "Freddy",
  lastName: "Okoro",
  returningStatus: true,
  stayedAt: ["aba", "owerri", "orlu", 23, true, { dubai: "boj-arab" }],
  car: { color: "blue", make: "toyota", design: ["jeep", "full option"] },
};

function populateUser(returningStatus: boolean, firstName: string) {
  if (returningStatus) {
    returningUserDisplay.innerHTML = "back";
    userNameDisplay.innerHTML = firstName + "!";
  } else {
    returningUserDisplay.innerHTML = "";
  }
}

populateUser(you.returningStatus, you.firstName);

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
}

// tuple challenge
let currentLocation: [string, string, number] = ["London", "11:35", 17];
footer.innerHTML =
  currentLocation[0] +
  "  " +
  currentLocation[1] +
  "  " +
  currentLocation[2] +
  "°";
