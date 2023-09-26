"use strict";
class MainProp {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
//enum
var LoyalUser;
(function (LoyalUser) {
    LoyalUser["GOLD_USER"] = "GOLD USER";
    LoyalUser["SILVER_USER"] = "SILVER USER";
    LoyalUser["BRONZE_USER"] = "BRONZE USER";
})(LoyalUser || (LoyalUser = {}));
// array of objects & applying interface
const properties = [
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
        contact: [+1122333, "marywinkle@gmail.com"],
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
const reviews = [
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
const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");
function showReviewTotal(value, reviewer, isLoyalty) {
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
const you = {
    firstName: "Freddy",
    lastName: "Okoro",
    returningStatus: true,
    stayedAt: ["aba", "owerri", "orlu", 23, true, { dubai: "boj-arab" }],
    car: { color: "blue", make: "toyota", design: ["jeep", "full option"] },
};
function populateUser(returningStatus, firstName) {
    if (returningStatus) {
        returningUserDisplay.innerHTML = "back";
        userNameDisplay.innerHTML = firstName + "!";
    }
    else {
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
let currentLocation = ["London", "11:35", 17];
footer.innerHTML =
    currentLocation[0] +
        "  " +
        currentLocation[1] +
        "  " +
        currentLocation[2] +
        "°";
