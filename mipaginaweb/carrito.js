// Ejemplo de datos del carrito
const cartData = [
    { name: "Producto 1", price: 10.99 },
    { name: "Producto 2", price: 20.50 },
    { name: "Producto 3", price: 5.75 },
];

const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.querySelector('.total-price');

let total = 0;

cartData.forEach(item => {
    const itemElement = document.createElement('li');
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(itemElement);
    
    total += item.price;
});

totalPriceElement.textContent = `$${total.toFixed(2)}`;
