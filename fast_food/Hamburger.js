"use strict";

const menu = {
    little: {price: 50, calory: 20},
    big: {price: 100, calory: 40},

    cheese: {price: 10, calory: 20},
    salad: {price: 20, calory: 5},
    potato: {price: 15, calory: 10},

    additions: {
        condiment: {price: 15, calory: 0},
        sauce: {price: 20, calory: 5}
    }
};

class Hamburger {
    constructor(size, stuffing, addition) {
        this.size = size;
        this.stuffing = stuffing;
        this.addition = addition;
        this.newOrders = [];
       
        this.addTopping();
        this.addMenu();
        this.calculatePriceCalories()
    }

    addTopping() {
        if(this.addition == undefined) {
            this.addition = [];
        } 
        return this.addition;
    }

    addMenu() {
        if(this.addition.length !== 0) {
            this.newOrders = [this.size, this.stuffing, this.addition.condiment, this.addition.sauce];
        } else {
            this.newOrders = [this.size, this.stuffing];
        }
        return this.newOrders;
    }

    calculatePriceCalories() {
        let sum = 0;
        let calories = 0;
        for (let product of this.newOrders) {
            sum += product.price;
            calories += product.calory;
        }
        console.log(`Cуммарная стоимость (руб.) гамбургера ${sum}`);
        console.log(`Cуммарная калорийность (кКл.) гамбургера ${calories}`);  
    }
};

const fastFood = new Hamburger(menu.big, menu.cheese, menu.additions);

