const products = {
  rodistrong: {
    title: "RodiStrong",
    body: "Vahvempi kapselivalmiste, 50 kapselia, 220 mg ruusujuurijauhetta kapselissa.",
    price: "23,00 €",
    image: "./assets/product-rodistrong.png",
    link: "https://verkkokauppa.mesacos.fi/product/4/rodistrong",
    quote: "\"Esimerkkiteksti: käytän RodiStrongia vuorotyön rinnalla useamman kuukauden ajan.\"",
    crossSell: "tyrni",
  },
  rodisana: {
    title: "Rodisana",
    body: "Miedompi kapselivalmiste, 100 kapselia, 110 mg ruusujuurijauhetta kapselissa. Pitkäaikaiseen käyttöön.",
    price: "23,00 €",
    image: "./assets/product-rodisana.jpg",
    link: "https://verkkokauppa.mesacos.fi/product/1/rodisana",
    quote: "\"Esimerkkiteksti: Rodisana sopii hyvin pitkäjänteiseen, tasaiseen käyttöön.\"",
    crossSell: "tyrni",
  },
  rosurt: {
    title: "ROS-URT",
    body: "Ruusujuuri ja nokkonen yhdessä: 50 kapselia, kapselissa 210 mg ruusujuurijauhetta ja 110 mg nokkoslehtijauhetta.",
    price: "24,00 €",
    image: "./assets/product-ros-urt.png",
    link: "https://verkkokauppa.mesacos.fi/product/9/ros-urt",
    quote: "\"Esimerkkiteksti: ROS-URT on osa arkirutiinia.\"",
    crossSell: "tyrni",
  },
  voide: {
    title: "Rhodiola rosea ruusujuurivoide",
    body: "Ruusujuuriuute kylmäpuristetussa luomu-kookosöljyssä, 40 g. Ulkoiseen käyttöön.",
    price: "17,00 €",
    image: "./assets/product-ruusujuurivoide.png",
    link: "https://verkkokauppa.mesacos.fi/product/8/rhodiola-rosea-ruusujuurivoide",
    quote: "\"Esimerkkiteksti: voide on osa päivittäistä ihonhoitorutiinia.\"",
    crossSell: "rodisana",
  },
  tyrni: {
    title: "Tyrnijauhe",
    body: "100 g kuivattua, jauhettua tyrnimarjan marjalihaa, kuori- ja siemenosaa.",
    price: "10,00 €",
    image: "./assets/product-tyrnijauhe.jpg",
    link: "https://verkkokauppa.mesacos.fi/product/12/tyrnijauhe",
    quote: "\"Esimerkkiteksti: lisään tyrnijauhetta aamupuuroon päivittäin.\"",
    crossSell: "rodisana",
  },
  karpalo: {
    title: "Karpalojauhe",
    body: "100 g kuivattua, jauhettua karpalon marjalihaa, kuori- ja siemenosaa.",
    price: "10,00 €",
    image: "./assets/product-karpalojauhe.jpg",
    link: "https://verkkokauppa.mesacos.fi/product/15/karpalojauhe",
    quote: "\"Esimerkkiteksti: karpalojauhe smoothiessa on tullut osaksi viikkorutiinia.\"",
    crossSell: "rodisana",
  },
};

const segmentSteps = {
  shift: {
    title: "Missä muodossa haluat käyttää tuotetta?",
    options: [
      { label: "Vahva kapseli", desc: "220 mg ruusujuurijauhetta kapselissa", product: "rodistrong" },
      { label: "Ruusujuuri + nokkonen", desc: "Yhdistelmävalmiste, 210 mg + 110 mg", product: "rosurt" },
    ],
  },
  student: {
    title: "Missä muodossa haluat käyttää tuotetta?",
    options: [
      { label: "Mieto, pitkäaikainen kapseli", desc: "110 mg ruusujuurijauhetta kapselissa", product: "rodisana" },
      { label: "Vahvempi kapseli", desc: "220 mg ruusujuurijauhetta kapselissa", product: "rodistrong" },
    ],
  },
  senior: {
    title: "Missä muodossa haluat käyttää tuotetta?",
    options: [
      { label: "Ruusujuuri + nokkonen", desc: "Yhdistelmävalmiste, 210 mg + 110 mg", product: "rosurt" },
      { label: "Mieto kapseli", desc: "110 mg ruusujuurijauhetta kapselissa", product: "rodisana" },
    ],
  },
  women: {
    title: "Kiinnostaako ihonhoito vai päivittäinen ravinto?",
    options: [
      { label: "Ulkoinen ihonhoito", desc: "Ruusujuurivoide, 40 g", product: "voide" },
      { label: "Päivittäinen ravinto — tyrni", desc: "Tyrnijauhe, 100 g", product: "tyrni" },
      { label: "Päivittäinen ravinto — karpalo", desc: "Karpalojauhe, 100 g", product: "karpalo" },
    ],
  },
};

const steps = document.querySelectorAll("[data-step]");
const dots = document.querySelectorAll("[data-dot]");
const step2Title = document.querySelector("[data-step2-title]");
const step2Options = document.querySelector("[data-step2-options]");

function goToStep(number) {
  steps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === String(number)));
  dots.forEach((dot) => dot.classList.toggle("is-active", Number(dot.dataset.dot) <= number));
  document.getElementById("opas").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showResult(productKey) {
  const data = products[productKey];
  document.querySelector("[data-result-image]").src = data.image;
  document.querySelector("[data-result-image]").alt = `${data.title}-tuotepakkaus`;
  document.querySelector("[data-result-title]").textContent = data.title;
  document.querySelector("[data-result-body]").textContent = data.body;
  document.querySelector("[data-result-price]").textContent = data.price;
  document.querySelector("[data-result-link]").href = data.link;
  document.querySelector("[data-result-link]").textContent = `Osta ${data.title}`;
  document.querySelector("[data-result-quote] p").textContent = data.quote;

  const crossSell = products[data.crossSell];
  document.querySelector("[data-cross-sell-image]").src = crossSell.image;
  document.querySelector("[data-cross-sell-image]").alt = `${crossSell.title}-tuotepakkaus`;
  document.querySelector("[data-cross-sell-title]").textContent = crossSell.title;
  document.querySelector("[data-cross-sell-price]").textContent = crossSell.price;
  document.querySelector("[data-cross-sell-link]").href = crossSell.link;

  goToStep(3);
}

document.querySelectorAll("[data-segment]").forEach((button) => {
  button.addEventListener("click", () => {
    const segment = segmentSteps[button.dataset.segment];
    step2Title.textContent = segment.title;
    step2Options.innerHTML = "";
    segment.options.forEach((option) => {
      const el = document.createElement("button");
      el.className = "option-card";
      el.type = "button";
      el.innerHTML = `<strong>${option.label}</strong><span>${option.desc}</span>`;
      el.addEventListener("click", () => showResult(option.product));
      step2Options.appendChild(el);
    });
    goToStep(2);
  });
});

document.querySelector("[data-back='1']").addEventListener("click", () => goToStep(1));
document.querySelector("[data-restart]").addEventListener("click", () => goToStep(1));

document.querySelector("[data-reminder-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = new FormData(form).get("email");
  const message = document.querySelector("[data-reminder-message]");
  message.textContent = `Kiitos! Muistutus lähetettäisiin osoitteeseen ${email} n. 60 päivän kuluttua. (Prototyyppi — ei oikeaa lähetystä.)`;
  form.reset();
});
