class Food {
    constructor() {
        var foodStock;
    }

    preload() {
        milkBottle = loadImage("Images/Milk.png");
    }

    display() {
        var x = 180, y = 100;
        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodStock!= 0) {
            for(var i = 0; i < this.foodStock; i++) {
                if(i%10==0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }

    getFoodStock() {
        var getFoodStock = database.ref('foodStock');
    }

    updateFoodStock() {
        database.ref('/').update({
        })
    }
}