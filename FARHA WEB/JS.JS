// Define bill items
let billItems = [
    { item: "Item 1", quantity: 2, price: 10.00 },
    { item: "Item 2", quantity: 3, price: 5.00 }
];

// Calculate subtotal and tax
let subtotal = billItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
let tax = subtotal * 0.08;
let total = subtotal + tax;

// Display bill
console.log("Bill Display");
console.log("----------------");
console.log("| Item     | Quantity | Price  | Total  |");
console.log("----------------");
billItems.forEach(item => {
    console.log(`| ${item.item}   | ${item.quantity}    | $${item.price.toFixed(2)} | $${(item.quantity * item.price).toFixed(2)} |`);
});
console.log("----------------");
console.log(`| Subtotal: |          |        | $${subtotal.toFixed(2)} |`);
console.log(`| Tax (8%):  |          |        | $${tax.toFixed(2)} |`);
console.log(`| Total:    |          |        | $${total.toFixed(2)} |`);
console.log("----------------");

