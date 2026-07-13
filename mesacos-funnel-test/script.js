const cart = [];

const segmentContent = {
  shift: {
    title: "RodiStrong",
    copy:
      "RodiStrong on ruusujuurijauhevalmiste: 50 gelatiinikapselia, 220 mg ruusujuurijauhetta kapselissa. Hinta verkkokaupassa 23,00 euroa.",
  },
  study: {
    title: "Rodisana",
    copy:
      "Rodisana on miedompi kapselituote: 100 gelatiinikapselia, 110 mg ruusujuurijauhetta kapselissa. Hinta verkkokaupassa 23,00 euroa.",
  },
  senior: {
    title: "ROS-URT",
    copy:
      "ROS-URT yhdistää ruusujuuren ja nokkosen: 50 gelatiinikapselia, kapselissa 210 mg ruusujuurijauhetta ja 110 mg nokkoslehtijauhetta. Hinta 24,00 euroa.",
  },
  women: {
    title: "Tyrnijauhe tai karpalojauhe",
    copy:
      "Marjajauheita käytetään esimerkiksi puuron, viilin ja jogurtin päällä tai smoothieen. Tyrnijauhe ja karpalojauhe ovat 100 gramman pakkauksia, hinta 10,00 euroa.",
  },
};

const prices = {
  RodiStrong: 23,
  Rodisana: 23,
  "ROS-URT": 24,
  Tyrnijauhe: 10,
  Karpalojauhe: 10,
  "Rhodiola rosea ruusujuurivoide": 17,
};

const cartDrawer = document.querySelector("[data-cart]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");

document.querySelectorAll("[data-segment]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-segment]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    const selected = segmentContent[button.dataset.segment];
    document.querySelector("[data-segment-title]").textContent = selected.title;
    document.querySelector("[data-segment-copy]").textContent = selected.copy;
  });
});

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => {
    addToCart(button.dataset.add);
    openCart();
  });
});

document.querySelector("[data-open-cart]").addEventListener("click", openCart);
document.querySelector("[data-close-cart]").addEventListener("click", closeCart);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) {
    closeCart();
  }
});

document.querySelector("[data-lead-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = new FormData(form).get("name").trim();
  const message = document.querySelector("[data-form-message]");
  message.textContent = `Kiitos ${name}. Testiopas olisi nyt lähetetty sähköpostiin.`;
  form.reset();
});

document.querySelector("[data-checkout]").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("[data-checkout-message]");

  if (!cart.length) {
    message.textContent = "Lisää ensin tuote koriin.";
    return;
  }

  const total = cart.reduce((sum, item) => sum + prices[item], 0);
  message.textContent = `Testitilaus vastaanotettu. Yhteensä ${formatPrice(total)}.`;
});

function addToCart(productName) {
  cart.push(productName);
  renderCart();
}

function renderCart() {
  cartCount.textContent = cart.length;

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty">Kori on tyhjä.</p>';
    return;
  }

  const rows = cart
    .map(
      (item, index) => `
        <div class="cart-row">
          <span>${item}</span>
          <strong>${formatPrice(prices[item])}</strong>
          <button class="close-button" type="button" aria-label="Poista ${item}" data-remove="${index}">&times;</button>
        </div>
      `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + prices[item], 0);
  cartItems.innerHTML = `${rows}<div class="cart-row"><span>Yhteensä</span><strong>${formatPrice(total)}</strong></div>`;

  cartItems.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.remove), 1);
      renderCart();
    });
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function formatPrice(value) {
  return `${value.toFixed(2).replace(".", ",")} €`;
}
