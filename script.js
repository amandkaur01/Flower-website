document.addEventListener("DOMContentLoaded", function () {
  let cart = [];
  const cartIcon = document.querySelector(".fa-shopping-cart"); // header cart icon
  const cartPopup = document.getElementById("cart-popup");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const confirmOrderBtn = document.getElementById("confirm-order");
  const closeCartBtn = document.getElementById("close-cart");
  const orderMessage = document.getElementById("order-message");
  document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const productBox = this.closest(".box");
      const name = productBox.querySelector("h3").innerText;
      const priceText = productBox.querySelector(".price").innerText;
      const price = parseFloat(priceText.replace("$", ""));
      cart.push({ name, price });
      alert(`${name} added to cart!`);
    });
  });
  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    updateCartPopup();
    cartPopup.style.display = "flex";
  });
  closeCartBtn.addEventListener("click", () => {
    cartPopup.style.display = "none";
  });
  function updateCartPopup() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
          <button class="remove-btn" data-index="${index}">Remove</button>`;
        cartItemsContainer.appendChild(itemDiv);
      });
    }
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const idx = this.getAttribute("data-index");
        cart.splice(idx, 1);
        updateCartPopup();
      });
    });
  }
  confirmOrderBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    orderMessage.style.display = "block";
    cart = [];
    updateCartPopup();
  });
});
let loginForm = document.querySelector(".login-form");
document.getElementById("login-btn").onclick = (e) => {
  e.preventDefault(); 
  loginForm.classList.toggle("active");
};




