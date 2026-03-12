const buttons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector(".cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const item = cart.find(p => p.name === name);

        if (item) {
            item.qty++;
        } else {
            cart.push({
                name: name,
                price: price,
                qty: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    });
});

function updateCartCount() {
    let total = 0;

    cart.forEach(item => {
        total += item.qty;
    });

    cartCount.textContent = total;
}