function createProduct(name, price) {
    let stock = 10; 
    return {
        name,
        price,

        buy(qty) {
            if (qty <= stock) {
                stock = stock - qty;
                console.log(`Booked – ${stock} pieces left`);
            } else {
                console.log(`We don't have ${qty} pieces`);
            }
        },

        refill(qty) {
            stock = stock + qty;
            console.log(`Refilled – ${stock} pieces now`);
        }
    };
}

let laptop=createProduct("MacBook", 1500000);
laptop.buy(3)
laptop.refill(3)
laptop.buy(20)