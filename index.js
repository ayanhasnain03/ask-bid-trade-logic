const orderBook = {
  asks: [
    { price: 90, quantity: 1 }, 
    { price: 85, quantity: 5 }, 
  ],
  bids: [
    { price: 95, quantity: 4 },  
    { price: 80, quantity: 3 },  
  ],
};



function getFillAmount(price, quantity, side) {
  let filled = 0;

  if (side === "buy") {
    
    orderBook.asks.forEach((o) => {
      if (o.price <= price && quantity > 0) {
        const fillQuantity = Math.min(quantity, o.quantity); 
        filled += fillQuantity;
        quantity -= fillQuantity;  
        o.quantity -= fillQuantity;  
      }
    });
  } else if (side === "sell") {
   
    orderBook.bids.forEach((o) => {
      if (o.price >= price && quantity > 0) {
        const fillQuantity = Math.min(quantity, o.quantity); 
        filled += fillQuantity;
        quantity -= fillQuantity;  
        o.quantity -= fillQuantity; 
      }
    });
  }

  return filled;
}
let filled = getFillAmount(10, 5, "buy");
console.log("Filled Quantity for Buy Order at price 100:", filled);


filled = getFillAmount(90, 4, "sell");
console.log("Filled Quantity for Sell Order at price 90:", filled);
