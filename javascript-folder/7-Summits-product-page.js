/*number of product1*/
const MinusButton = document.getElementById("minus1");
const PlusButton = document.getElementById("plus1");
const InputField = document.getElementById("input1");

MinusButton.addEventListener('click', event => {
    if (InputField.value > 0) {
        event.preventDefault();
        const currentValue = Number(InputField.value) || 0;
        InputField.value = currentValue - 1;
    }
    else {
        event.preventDefault();
        const currentValue = Number(InputField.value) || 0;
        InputField.value = currentValue;
    }
});

PlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(InputField.value) || 0;
    InputField.value = currentValue + 1;
});

/*cart-panel*/
let openPanelButton = document.getElementById("open-panel");
let closePanelButton = document.getElementById("close-panel");
let cartPanel = document.querySelector(".cart-panel");
let cartPanelBackground = document.querySelector(".cart-panel-background");
let checkout = document.querySelector(".checkout");

let loginPanel = document.querySelector(".login-panel");
let loginPanelBackground = document.querySelector(".login-panel-background");
let loginClosePanelButton = document.getElementById("login-close-panel");

let buyPanelButton = document.getElementById("buy-panel");

buyPanelButton.onclick = () => {
    cartPanel.classList.add("open");
    cartPanelBackground.classList.add("open-1");
}

openPanelButton.onclick = () => {
    cartPanel.classList.add("open");
    cartPanelBackground.classList.add("open-1");
    loginPanel.classList.remove("loginopen");
    loginPanelBackground.classList.remove("loginopen-1");
}

closePanelButton.onclick = () => {
    cartPanel.classList.remove("open");
    cartPanelBackground.classList.remove("open-1");
}

checkout.onclick = () => {
    cartPanel.classList.remove("open");
    cartPanelBackground.classList.remove("open-1");
    loginPanel.classList.add("loginopen");
    loginPanelBackground.classList.add("loginopen-1");
}

loginClosePanelButton.onclick = () => {
    loginPanel.classList.remove("loginopen");
    loginPanelBackground.classList.remove("loginopen-1");
}

/*number of product*/
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const inputField = document.getElementById("input");

minusButton.addEventListener('click', event => {
    if (inputField.value > 0) {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue - 1;
    }
    else {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue;
    }
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
});


