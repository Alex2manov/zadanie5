function itogl() {
    const productSelect = document.getElementById("product");
    const kolInput = document.getElementById("kol");
    const totalSpan = document.getElementById("total");
    const prices = { product1: 1000, product2: 2000, product3: 3000 };
    const selectedProduct = productSelect.value;
    const kolValue = kolInput.value;
    if (!isNaN(kolValue) && kolValue > 0) { 
        const price = prices[selectedProduct];
        const kol = kolInput.value;
        const total = price * kol;
        totalSpan.textContent = total + " ₽";
    } 
    else {
        totalSpan.textContent = "Ошибка ввода";
    }
}
window.addEventListener("DOMContentLoaded", function (event) {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", itogl);
});