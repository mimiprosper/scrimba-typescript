"use strict";
//enums ex1
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
//enums ex2
var Car;
(function (Car) {
    Car["Toyota"] = "toyota";
    Car["Mercedes"] = "mercedes";
})(Car || (Car = {}));
//enums ex3
var Engine;
(function (Engine) {
    Engine["diesel"] = "diesel";
    Engine["gas"] = "gas";
})(Engine || (Engine = {}));
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
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD USER";
    LoyaltyUser["SILVER_USER"] = "SILVER USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE USER";
})(LoyaltyUser || (LoyaltyUser = {}));
const rating = [
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
const stats = [
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
function show(identity) {
    return identity;
}
