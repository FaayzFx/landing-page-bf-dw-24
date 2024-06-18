const promoSliderCont = document.getElementById("promo-slider-cont");

  const categories = [
    {
      title: "Tendências",
      text:
        "Está precisando de novas indicações para a sua loja?<br><br>Aqui na Wilson, você encontra diversos modelos no atacado. Aproveite para se preparar com as melhores tendências e aumentar a sua margem de lucro."
    },
    {
      title: "Tênis & Botas",
      text:
        "A coleção indispensável para o inverno inclui o mix de tênis e botas, entre elas temos promoções. <br><br>Portanto, a melhor opção é se preparar com marcas renomadas de calçados fechados para aquecer suas vendas nesta estação."
    },
    {
      title: "Promoções",
      text:
        "A marca Havaianas é uma referência notável quando se trata de calçados, sendo um produto excelente para comercializar no verão e ao longo do ano, pois é garantia de alta demanda contínua. <br><br>Se você já é um revendedor de Havaianas, compreende do que estamos falando. Caso ainda não seja, recomendo estudar essa grande marca e, se possível, incluí-la em sua loja. Dessa forma, você poderá oferecer aos seus clientes o melhor do Brasil: as Havaianas!"
    },
    {
      title: "Infantil",
      text:
        "Se você é um revendedor que busca encantar pais e responsáveis com produtos de qualidade, nosso catálogo de calçados infantis no atacado é a resposta. <br><br>Abasteça seu estoque!"
    },
    {
      title: "Masculino",
      text:
        "Seja destaque na moda masculina, apresentando aos seus clientes as últimas tendências em calçados. <br><br>Impulsione suas vendas e faça com que cada passo seja uma declaração de estilo. Junte-se a nós no emocionante mundo dos calçados masculinos no atacado e dê aos seus clientes uma experiência única em moda para os pés. Compre no atacado!"
    },
    {
      title: "Feminino",
      text:
        "Nossa coleção é mais do que simplesmente sapatos; são expressões de estilo e personalidade. <br><br>Cada par é escolhido para elevar a confiança da mulher moderna, proporcionando conforto e elegância em cada passo. Adquira já no atacado!"
    }
  ];

  const casePromoSlider = `
  <swiper-container class="promo-slider-cont" slides-per-view="auto" centered-slides="true" grab-cursor="true" slide-to-clicked-slide="true" pagination="true" pagination-clickable="true" loop="true">
    ${categories
      .map(
        category => `
          <swiper-slide class="case-slider">
            <div class="case-promo-content">
              <img src="https://i.imgur.com/66sqAxy.png" alt="Render 03" class="render-03">
              <h2 class="heading-2">${category.title}</h2>
              <p class="paragraph-1">${category.text}</p>
            </div>
            <div class="case-promo-cta-box">
              <hr class="stroke-division">
              <a href="#" class="case-promo-bottom">
                <p class="case-promo-bottom-text">Veja Aqui</p>
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </swiper-slide>
        `
      )
      .join('')
    }
  </swiper-container>
`;

promoSliderCont.innerHTML = casePromoSlider;