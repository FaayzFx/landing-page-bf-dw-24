const tipsSlider = [
  {
    tipsSlider: `
      <img src="https://i.imgur.com/66sqAxy.png" class="render-05" alt="Render 05">
      <h3 class="heading-2">Defina os descontos dos produtos</h3>
      <p class="paragraph-1">Você pode conceder reduções de preços mais conservadoras e aproveitar para instigar os clientes para promoções do fim de novembro.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/66sqAxy.png" class="render-05" alt="Render 05">
      <h3 class="heading-2">Aposte em descontos progressivos</h3>
      <p class="paragraph-1">Encoraje o consumidor a adquirir mais produtos. Quanto mais itens ele comprar, maior será o abatimento no valor final de compra.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/66sqAxy.png" class="render-05" alt="Render 05">
      <h3 class="heading-2">Divulgue nas redes sociais</h3>
      <p class="paragraph-1">Você pode divulgar cupons de descontos nos stories e criar enquetes, por exemplo.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/66sqAxy.png" class="render-05" alt="Render 05">
      <h3 class="heading-2">Faça kits promocionais</h3>
      <p class="paragraph-1">Isso é especialmente válido para conseguir dar vazão aos itens que não saem com tanta facilidade.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/66sqAxy.png" class="render-05" alt="Render 05">
      <h3 class="heading-2">Aposte em descontos progressivos</h3>
      <p class="paragraph-1">Encoraje o consumidor a adquirir mais produtos. Quanto mais itens ele comprar, maior será o abatimento no valor final de compra.</p>
    `
  },
  {
    tipsSlider: `
      <img src="https://i.imgur.com/66sqAxy.png" class="render-05" alt="Render 05">
      <h3 class="heading-2">Divulgue nas redes sociais</h3>
      <p class="paragraph-1">Você pode divulgar cupons de descontos nos stories e criar enquetes, por exemplo.</p>
    `
  }
];

const tipsSliderCont = document.querySelector('.tips-slider-cont');
const tipsSliderWrapper = document.querySelector('.tips-slider-wrapper');

tipsSlider.forEach(tip => {
  const li = document.createElement('swiper-slide');
  li.classList.add('tips-slider');
  li.innerHTML = tip.tipsSlider;
  tipsSliderWrapper.appendChild(li);
});





