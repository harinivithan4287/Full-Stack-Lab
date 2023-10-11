// Add event listener to 'Add to Cart' buttons
var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Cart items array
var cartItems = [];

// Function to add item to cart
function addToCart(event) {
  var foodItem = event.target.parentElement;
  var item = {
    name: foodItem.getElementsByTagName('h3')[0].innerText,
    price: parseFloat(foodItem.getElementsByTagName('p')[0].innerText.split(':')[1]),
  };
  cartItems.push(item);
  updateCart();
}

// Function to update cart
function updateCart() {
  var cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  var totalPrice = 0;
  for (var i = 0; i < cartItems.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerText = cartItems[i].name + ' - $' + cartItems[i].price;
    cartList.appendChild(listItem);
    totalPrice += cartItems[i].price;
  }
  document.getElementById('total-price').innerText = 'Total Price: $' + totalPrice;
}

// Add event listener to 'Checkout' button
document.getElementById('checkout').addEventListener('click', checkout);

// Function to handle checkout
function checkout() {
  // Perform necessary actions for checkout, e.g. payment processing, order confirmation, etc.
  alert('Thank you for your order!');
  cartItems = []; // Clear cart
  updateCart();
}
function logout() {
  window.location.href = "Login.html";
}