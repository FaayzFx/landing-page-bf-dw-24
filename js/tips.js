const tipsArray = [
    {
      image: "https://i.imgur.com/66sqAxy.png",
      title: "Defina os descontos dos produtos",
      description:
        "Você pode conceder reduções de preços mais conservadoras e aproveitar para instigar os clientes para promoções do fim de novembro."
    },
    {
      image: "https://i.imgur.com/66sqAxy.png",
      title: "Aposte em descontos progressivos",
      description:
        "Encoraje o consumidor a adquirir mais produtos. Quanto mais itens ele comprar, maior será o abatimento no valor final de compra."
    },
    {
      image: "https://i.imgur.com/66sqAxy.png",
      title: "Divulgue nas redes sociais",
      description:
        "Você pode divulgar cupons de descontos nos stories e criar enquetes, por exemplo."
    },
    {
      image: "https://i.imgur.com/66sqAxy.png",
      title: "Faça kits promocionais",
      description:
        "Isso é especialmente válido para conseguir dar vazão aos itens que não saem com tanta facilidade."
    }
  ];

  const tipsDiv = document.querySelector(".tips-slider-list");
  const tipsSliders = document.querySelectorAll(".tips-slider");

  // Calculate the width of the tipsSliders and tipsDiv
  const tipsSliderWidth = tipsSliders[0].offsetWidth;
  const tipsDivWidth = tipsDiv.offsetWidth;

  // Calculate the number of tipsSliders that can fit in the viewport
  const itemsPerViewport = Math.floor(window.innerWidth / tipsSliderWidth);

  // Function to center the current tips-slider
  const centerTipsSlider = () => {
    const currentItem = document.querySelector(".tips-slider-centered");
    const middleScrollPosition = tipsDivWidth / 2 - tipsSliderWidth / 2;
    const currentItemIndex = Array.from(tipsSliders).indexOf(currentItem);
    const targetScrollPosition = middleScrollPosition - (currentItemIndex % itemsPerViewport) * tipsSliderWidth;

    tipsDiv.classList.remove("swipe-right", "swipe-left");
    tipsDiv.scrollLeft = targetScrollPosition;
  };

  tipsDiv.addEventListener("scroll", centerTipsSlider);

  // Call centerTipsSlider once at the beginning to set the initial centered element
  centerTipsSlider();

  tipsArray.forEach(tip => {
    const tipItem = document.createElement("li");
    tipItem.classList.add("tips-slider");

    const tipImage = document.createElement("img");
    tipImage.classList.add("render-05");
    tipImage.src = tip.image;
    tipImage.alt = "Ilustração de dicas de negócio";

    const tipTitle = document.createElement("h3");
    tipTitle.textContent = tip.title;
    tipTitle.classList.add("heading-2");

    const tipDescription = document.createElement("p");
    tipDescription.textContent = tip.description;
    tipDescription.classList.add("paragraph-1");

    tipItem.appendChild(tipImage);
    tipItem.appendChild(tipTitle);
    tipItem.appendChild(tipDescription);

    tipsDiv.appendChild(tipItem);
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  tipsDiv.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - tipsDiv.offsetLeft;
    scrollLeft = tipsDiv.scrollLeft;
  });

  tipsDiv.addEventListener("mouseleave", () => {
    isDown = false;
  });

  tipsDiv.addEventListener("mouseup", () => {
    isDown = false;
  });

  tipsDiv.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tipsDiv.offsetLeft;
    const walk = (x - startX) * 3; // Scroll at a slower rate
    tipsDiv.scrollLeft = scrollLeft - walk;
  });

  document.querySelector(".swipe-left").addEventListener("click", () => {
    const currentItem = document.querySelector(".tips-slider-centered");
    const nextItem = currentItem.previousElementSibling || tipsDiv.lastElementChild;

    tipsDiv.classList.remove("swipe-right", "swipe-left");
    tipsDiv.classList.add("swipe-left");

    currentItem.classList.remove("tips-slider-centered");
    nextItem.classList.add("tips-slider-centered");

    setTimeout(() => {
      tipsDiv.classList.remove("swipe-left");
    }, 500);

    // Center the new currentItem
    nextItem.classList.add("tips-slider-centered");
    centerTipsSlider();
  });

  document.querySelector(".swipe-right").addEventListener("click", () => {
    const currentItem = document.querySelector(".tips-slider-centered");
    const nextItem = currentItem.nextElementSibling || tipsDiv.firstElementChild;

    tipsDiv.classList.remove("swipe-right", "swipe-left");
    tipsDiv.classList.add("swipe-left");

    currentItem.classList.remove("tips-slider-centered");
    nextItem.classList.add("tips-slider-centered");

    setTimeout(() => {
      tipsDiv.classList.remove("swipe-left");
    }, 500);

    // Center the new currentItem
    nextItem.classList.add("tips-slider-centered");
    centerTipsSlider();
  });