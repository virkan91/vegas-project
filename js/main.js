const root = document.querySelector(".right_box");

// UP BOX
const up_box = document.createElement("div");
up_box.className = "up_box";

const h1 = document.createElement("h1");
h1.textContent = "Батат фри";
const p_h1 = document.createElement("p");
p_h1.textContent = "140 г";
const hr = document.createElement("hr");

const h2_box = document.createElement("div");
const h2 = document.createElement("h2");
h2.textContent = "Соус на выбор";
const p_h2 = document.createElement("p");
p_h2.textContent = "1 / 1 за 0₽";
// SAUCES
const sauces = document.createElement("div");

// DOWN BOX
const down_box = document.createElement("div");
const total_amount = document.createElement("p")
total_amount.textContent = "220 ₽ ";
const btn_add = document.createElement("button")
btn_add.textContent = "Добавить"

root.appendChild(up_box);
root.appendChild(down_box);
up_box.appendChild(h1);
up_box.appendChild(p_h1);
up_box.appendChild(hr);
up_box.appendChild(h2_box);
h2_box.appendChild(h2);
h2_box.appendChild(p_h2);
up_box.appendChild(sauces);

down_box.appendChild(total_amount)
down_box.appendChild(btn_add)

console.log(root);