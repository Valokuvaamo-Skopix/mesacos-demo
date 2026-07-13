const segments = {
  shift: {
    tab: "Vuorotyöläinen",
    eyebrow: "Vuorotyön keskellä",
    title: "RodiStrong",
    body: "Epäsäännöllinen työaika kuormittaa arkirytmiä. RodiStrong on vahvempi kapselivalmiste, 50 kapselia, 220 mg ruusujuurijauhetta kapselissa.",
    price: "23,00 €",
    image: "./assets/product-rodistrong.png",
    link: "https://verkkokauppa.mesacos.fi/product/4/rodistrong",
    linkLabel: "Osta RodiStrong",
  },
  student: {
    tab: "Opiskelija",
    eyebrow: "Opiskelun rinnalla",
    title: "Rodisana",
    body: "Kiireinen opiskeluarki kaipaa pitkäjänteistä tukea. Rodisana on miedompi kapselivalmiste, 100 kapselia, 110 mg ruusujuurijauhetta kapselissa, pitkäaikaiseen käyttöön.",
    price: "23,00 €",
    image: "./assets/product-rodisana.jpg",
    link: "https://verkkokauppa.mesacos.fi/product/1/rodisana",
    linkLabel: "Osta Rodisana",
  },
  senior: {
    tab: "Ikäihminen",
    eyebrow: "Lempeä yhdistelmä arkeen",
    title: "ROS-URT",
    body: "ROS-URT yhdistää ruusujuuren ja nokkosen: 50 kapselia, kapselissa 210 mg ruusujuurijauhetta ja 110 mg nokkoslehtijauhetta.",
    price: "24,00 €",
    image: "./assets/product-ros-urt.png",
    link: "https://verkkokauppa.mesacos.fi/product/9/ros-urt",
    linkLabel: "Osta ROS-URT",
  },
  women: {
    tab: "Vaihdevuosi-ikäinen nainen",
    eyebrow: "Vaihdevuosien tueksi",
    title: "Rhodiola rosea ruusujuurivoide",
    body: "Moni vaihdevuosi-ikäinen nainen käyttää ruusujuurivoidetta osana päivittäistä ihonhoitoa. Ruusujuuriuute kylmäpuristetussa luomu-kookosöljyssä, 40 g. Tyrnijauhe ja karpalojauhe sopivat päivittäiseen ravitsemukseen.",
    price: "17,00 €",
    image: "./assets/product-ruusujuurivoide.png",
    link: "https://verkkokauppa.mesacos.fi/product/8/rhodiola-rosea-ruusujuurivoide",
    linkLabel: "Osta ruusujuurivoide",
  },
};

const tabs = document.querySelectorAll("[data-segment]");
const panelImage = document.querySelector("[data-segment-image]");
const panelEyebrow = document.querySelector("[data-segment-eyebrow]");
const panelTitle = document.querySelector("[data-segment-title]");
const panelBody = document.querySelector("[data-segment-body]");
const panelPrice = document.querySelector("[data-segment-price]");
const panelLink = document.querySelector("[data-segment-link]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    const data = segments[tab.dataset.segment];
    panelImage.src = data.image;
    panelImage.alt = `${data.title}-tuotepakkaus`;
    panelEyebrow.textContent = data.eyebrow;
    panelTitle.textContent = data.title;
    panelBody.textContent = data.body;
    panelPrice.textContent = data.price;
    panelLink.href = data.link;
    panelLink.textContent = data.linkLabel;
  });
});

const leadForm = document.querySelector("[data-lead-form]");
leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(leadForm).get("name").trim();
  const message = document.querySelector("[data-form-message]");
  message.textContent = `Kiitos ${name}. Opas olisi nyt lähetetty sähköpostiin. (Prototyyppi — ei oikeaa lähetystä.)`;
  leadForm.reset();
});
