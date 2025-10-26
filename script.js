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

const signupLink = document.getElementById("signup-link"); 
const signupPopup = document.getElementById("signup-popup");
const closeSignup = document.getElementById("close-signup");
const backToLogin = document.getElementById("back-to-login");

if (signupLink) {
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupPopup.style.display = "flex"; 
  });
}

if (closeSignup) {
  closeSignup.addEventListener("click", () => {
    signupPopup.style.display = "none";
  });
}

if (backToLogin) {
  backToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupPopup.style.display = "none";
    loginForm.classList.add("active"); 
  });
}

const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registration successful! You can now log in.");
    signupPopup.style.display = "none";
  });
}

const forgotLink = document.querySelector(".login-form a[href='#forgot']");
const forgotPopup = document.getElementById("forgot-popup");
const closeForgot = document.getElementById("close-forgot");
const forgotBackLogin = document.getElementById("forgot-back-login");

if (forgotLink) {
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPopup.style.display = "flex";
  });
}

if (closeForgot) {
  closeForgot.addEventListener("click", () => {
    forgotPopup.style.display = "none";
  });
}

if (forgotBackLogin) {
  forgotBackLogin.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPopup.style.display = "none";
    loginForm.classList.add("active");
  });
}

const forgotForm = document.getElementById("forgot-form");
if (forgotForm) {
  forgotForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("reset-email").value;
    alert(`A reset link has been sent to ${email}`);
    forgotPopup.style.display = "none";
  });
}








