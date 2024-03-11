const sauces_list = [
   {
      id: 1,
      title: "Кетчуп",
      price: 0,
      cnt: 1,
   },
   {
      id: 2,
      title: "Сырный",
      price: 60,
      cnt: 0,
   },
   {
      id: 3,
      title: "Блю-чиз",
      price: 60,
      cnt: 0,
   },
   {
      id: 4,
      title: "Барбекю",
      price: 60,
      cnt: 0,
   },
];

const root = document.querySelector(".right_box");

function get() {
   root.innerHTML = "";
   // UP BOX
   const up_box = document.createElement("div");

   const h1 = document.createElement("h1");
   h1.textContent = "Батат фри";
   const p_h1 = document.createElement("p");
   p_h1.textContent = "140 г";
   const hr = document.createElement("hr");

   const h2_box = document.createElement("div");
   h2_box.className = "h2_box";
   const h2 = document.createElement("h2");
   h2.textContent = "Соус на выбор";
   const p_h2 = document.createElement("p");
   p_h2.textContent = "1 / 1 за 0₽";

   // SAUCES
   const sauces = document.createElement("div");
   sauces.className = "sauces";

   sauces_list.forEach((el) => {
      const sauce_box = document.createElement("div");
      sauce_box.className = "sauce_box";
      const name_box = document.createElement("div");
      name_box.className = "name_box";
      const title = document.createElement("p");
      title.className = "title";
      title.textContent = el.title;
      const price = document.createElement("p");
      price.className = "price";
      price.textContent = `+${el.price} ₽`;

      const cnt_box = document.createElement("div");
      cnt_box.className = "cnt_box";

      // INC
      const inc = document.createElement("button");
      inc.className = "inc";
      inc.textContent = "-";

      const cnt = document.createElement("p");
      cnt.className = "cnt";
      cnt.textContent = el.cnt;

      // DEC
      const dec = document.createElement("button");
      dec.className = "dec";
      dec.textContent = "+";
      dec.onclick = () => {
         sauces_list.forEach((e) => {
            if (el.id === e.id) {
               sauces_list[e.id - 1].cnt += 1;
            }
            get();
         });
      };

      sauces.appendChild(sauce_box);
      sauce_box.append(name_box, cnt_box);
      name_box.append(title, price);
      cnt_box.append(inc, cnt, dec);
   });

   // DOWN BOX
   const down_box = document.createElement("div");
   down_box.className = "down_box";
   const total_amount = document.createElement("p");
   total_amount.className = "total_amount";
   total_amount.textContent = "220 ₽ ";
   const btn_add = document.createElement("button");
   btn_add.className = "btn_add";
   btn_add.textContent = "Добавить";

   root.appendChild(up_box);
   root.appendChild(down_box);
   up_box.appendChild(h1);
   up_box.appendChild(p_h1);
   up_box.appendChild(hr);
   up_box.appendChild(h2_box);
   h2_box.appendChild(h2);
   h2_box.appendChild(p_h2);
   up_box.appendChild(sauces);

   down_box.appendChild(total_amount);
   down_box.appendChild(btn_add);
}
get();
