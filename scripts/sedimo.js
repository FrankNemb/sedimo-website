const headerButtons = document.querySelectorAll(".js-header-button");
console.log(headerButtons);
let selectedButton = document.querySelector(".js-header-button").id;

headerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonId = button.id;

    let classname = button.className;
    if (
      buttonId == "home" ||
      buttonId == "service" ||
      buttonId == "news" ||
      buttonId == "about" ||
      buttonId == "contact"
    ) {
      if (!classname.includes("header-button-selected")) {
        button.classList.add("header-button-selected");
        if (buttonId !== selectedButton) {
          document
            .getElementById(selectedButton)
            .classList.remove("header-button-selected");
          selectedButton = buttonId;
        }
      }
    }
  });
});

let aboutFounderButton = document.querySelector(".js-about-founder-button");
let aboutFounder = document.querySelector(".js-about-founder");
let aboutButtonContainer = document.querySelector(".js-about-button-container");

aboutFounderButton.addEventListener("click", () => {
  if (aboutFounder.className.includes("about-founder-display")) {
    aboutFounder.classList.remove("about-founder-display");
    aboutButtonContainer.classList.remove("about-button-container-pressed");
    aboutFounderButton.classList.remove("about-founder-button-pressed");
    aboutFounderButton.innerHTML = "View Team";
  } else {
    aboutFounder.classList.add("about-founder-display");
    aboutFounderButton.classList.add("about-founder-button-pressed");
    aboutButtonContainer.classList.add("about-button-container-pressed");
    aboutFounderButton.innerHTML = "Hide Team";
  }
});

let homeContainer = document.querySelector(".js-home-container");
let serviceContainer = document.querySelector(".js-service-container");
let aboutContainer = document.querySelector(".js-about-container");
let newsContainer = document.querySelector(".js-news-container");
let contactContainer = document.querySelector(".js-contact-container");
let containers = [
  homeContainer,
  serviceContainer,
  aboutContainer,
  newsContainer,
  contactContainer,
];
let i = 0;

containers.forEach((container) => {
  let button = headerButtons.item(i);
  i++;
  container.addEventListener("mouseover", () => {
    let buttonId = button.id;
    let classname = button.className;
    if (
      buttonId == "home" ||
      buttonId == "service" ||
      buttonId == "news" ||
      buttonId == "about" ||
      buttonId == "contact"
    ) {
      if (!classname.includes("header-button-selected")) {
        button.classList.add("header-button-selected");
        if (buttonId !== selectedButton) {
          document
            .getElementById(selectedButton)
            .classList.remove("header-button-selected");
          selectedButton = buttonId;
        }
      }
    }
  });
});

let serviceCards = document.querySelectorAll(".js-service-card");
let developmentCard = document.getElementById("project-portfolio");
let marketingCard = document.getElementById("project-marketing");
let sustainabilityCard = document.getElementById("project-sustainability");
let projectCards = [developmentCard, marketingCard, sustainabilityCard];

serviceCards.forEach((serviceCard) => {
  serviceCard.addEventListener("click", () => {
    let serviceCardId = serviceCard.id;

    if (serviceCardId == "service-portfolio") {
      console.log(serviceCardId);
      if (projectCards[1].classList.contains("project-card-display")) {
        projectCards[1].classList.remove("project-card-display");
        let card = document.getElementById("service-marketing");
        card.classList.remove("service-card-selected");
      } else if (projectCards[2].classList.contains("project-card-display")) {
        projectCards[2].classList.remove("project-card-display");
        let card = document.getElementById("service-sustainability");
        card.classList.remove("service-card-selected");
      }
      projectCards[0].classList.add("project-card-display");
      serviceCard.classList.add("service-card-selected");
    } else if (serviceCardId == "service-marketing") {
      console.log(serviceCardId);
      if (projectCards[0].classList.contains("project-card-display")) {
        projectCards[0].classList.remove("project-card-display");
        let card = document.getElementById("service-portfolio");
        card.classList.remove("service-card-selected");
      } else if (projectCards[2].classList.contains("project-card-display")) {
        projectCards[2].classList.remove("project-card-display");
        let card = document.getElementById("service-sustainability");
        card.classList.remove("service-card-selected");
      }
      projectCards[1].classList.add("project-card-display");
      serviceCard.classList.add("service-card-selected");
    } else if (serviceCardId == "service-sustainability") {
      console.log(serviceCardId);
      if (projectCards[0].classList.contains("project-card-display")) {
        projectCards[0].classList.remove("project-card-display");
        let card = document.getElementById("service-portfolio");
        card.classList.remove("service-card-selected");
      } else if (projectCards[1].classList.contains("project-card-display")) {
        projectCards[1].classList.remove("project-card-display");
        let card = document.getElementById("service-marketing");
        card.classList.remove("service-card-selected");
      }
      projectCards[2].classList.add("project-card-display");
      serviceCard.classList.add("service-card-selected");
    }
  });
});

let closeButtons = document.querySelectorAll(".js-close-button");

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    serviceCards.forEach((card) => {
      if (card.classList.contains("service-card-selected")) {
        card.classList.remove("service-card-selected");
        if (projectCards[0].classList.contains("project-card-display")) {
          projectCards[0].classList.remove("project-card-display");
        } else if (projectCards[1].classList.contains("project-card-display")) {
          projectCards[1].classList.remove("project-card-display");
        } else if (projectCards[2].classList.contains("project-card-display")) {
          projectCards[2].classList.remove("project-card-display");
        }
      }
    });
  });
});
