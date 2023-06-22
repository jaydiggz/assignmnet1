// Resize browser window
let wrapper = document.querySelector("#wrapper");
let sidebar = document.querySelector(".sidebar");
let navbar = document.querySelector("nav");
let header = document.querySelector("header");
let main = document.querySelector("#index");
let footer = document.querySelector("footer");
let ImageAndText = document.querySelector(".ImageAndText");
let ImageAndTextSub = document.querySelectorAll(".ImageAndText-sub_container");
let SidebarNav = document.querySelector(".nav-section");
let navFooter = document.querySelector(".nav-footer");
let placeholderCards = document.querySelectorAll(
  ".placeholder-image-container"
);
let bootstrapContainer = document.querySelector(".main-container");
let bootstrapSub = document.querySelector(".bootstrap-sub");
let form = document.querySelector(".form-container");
let itemContainer = document.querySelector(".item-container");
let cardContainer = document.querySelector(".card-container");
let select = document.querySelector("#style-picker");

// Change color
// options.addEventListener("click", changeBackground);

select.addEventListener("change", changeBackground);
function changeBackground(e) {
  let { value } = e.target;

  if (value === "standard") {
    wrapper.style.backgroundColor = "#8080802e";
  } else {
    wrapper.style.backgroundColor = `${value}`;
  }
}

/*
    /// BROWSER WINDOW BREAKPOINTS 
    > 990px is computer version
    > 767px & <= 990px is tablet version
    <= 767px is mobile version
*/

const handleWindowResize = () => {
  let browserWidth = window.innerWidth;

  // Desktop version
  if (browserWidth > 990) {
    desktopStyles();
    return;
  }

  // Tablet version
  if (browserWidth > 767 && browserWidth <= 990) {
    tabletStyles();
    return;
  }

  // Mobile version
  if (browserWidth <= 767) {
    mobileStyles();
    return;
  }
};

window.addEventListener("resize", handleWindowResize);

// Tablet styles
function tabletStyles() {
  main.style.display = "flex";
  navbar.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  sidebar.style.display = "flex";
  SidebarNav.style.display = "flex";
  ImageAndText !== null && (ImageAndText.style.marginLeft = "30%");
  ImageAndTextSub.forEach((item) => {
    item.style.width = "100%";
    item.classList.remove("ImageAndText-sub_container-Mobile");
  });
  sidebar.classList.remove("sidebar-mobile");
  navFooter.textContent = "En typisk sidfot för en inlämningsuppgift";
  placeholderCardNormalWidth();
  bootstrapContainer !== null && (bootstrapContainer.style.marginLeft = "22%");
  bootstrapTablet();
}

// Desktop styles
function desktopStyles() {
  main.style.display = "block";
  navbar.style.display = "block";
  header.style.display = "flex";
  footer.style.display = "block";
  sidebar.style.display = "none";
  ImageAndText !== null && (ImageAndText.style.marginLeft = "0");
  ImageAndTextSub.forEach((item) => {
    item.style.width = "70%";
    item.classList.remove("ImageAndText-sub_container-Mobile");
  });
  sidebar.classList.remove("sidebar-mobile");
  navFooter.textContent = "En typisk sidfot för en inlämningsuppgift";
  placeholderCardNormalWidth();
  bootstrapDesktop();
}

// Mobile styles
function mobileStyles() {
  sidebar.classList.add("sidebar-mobile");
  SidebarNav.style.display = "none";
  main.style.flexDirection = "column";
  ImageAndText !== null && (ImageAndText.style.marginLeft = "0");
  ImageAndTextSub.forEach((item) => {
    item.classList.add("ImageAndText-sub_container-Mobile");
  });
  navFooter.textContent = "Menu";
  placeholderCardFullWidth();
  openMenu();
  bootstrapMobile();
}

function placeholderCardFullWidth() {
  if (placeholderCards !== null) {
    placeholderCards.forEach((item) => {
      item.style.width = "100%";
    });
  }
}

function placeholderCardNormalWidth() {
  if (placeholderCards !== null) {
    placeholderCards.forEach((item) => {
      item.style.width = "23%";
    });
  }
}

function openMenu() {
  navFooter.addEventListener("click", function () {
    SidebarNav.style.display = "block";
  });
}

function bootstrapTablet() {
  if (bootstrapSub !== null) {
    bootstrapSub.classList.add("bootstrap-sub_tablet");
  }

  if (form !== null) {
    form.classList.add("forty-width");
  }

  if (itemContainer !== null) {
    itemContainer.classList.add("forty-width");
  }

  if (cardContainer !== null) {
    cardContainer.classList.add("forty-width");
  }
}

function bootstrapDesktop() {
  if (bootstrapSub !== null) {
    bootstrapSub.classList.remove("bootstrap-sub_tablet");
  }

  if (form !== null) {
    form.classList.remove("forty-width");
  }

  if (itemContainer !== null) {
    itemContainer.classList.remove("forty-width");
  }

  if (cardContainer !== null) {
    cardContainer.classList.remove("forty-width");
  }
}

function bootstrapMobile() {
  bootstrapContainer !== null && (bootstrapContainer.style.marginLeft = 0);
  if (bootstrapSub !== null) {
    bootstrapSub.classList.add("bootstrap-sub-full");
  }

  if (form !== null) {
    form.classList.add("full-width");
  }

  if (itemContainer !== null) {
    itemContainer.classList.add("full-width");
  }

  if (cardContainer !== null) {
    cardContainer.classList.add("full-width");
  }
}
