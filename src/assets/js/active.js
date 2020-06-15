const privateButton = document.querySelector(".private");
const publicButton = document.querySelector(".group");

const privateClick = () => {
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove(".active");
    privateButton.classList.add("active");
  } else {
    privateButton.classList.add("active");
  }
};
const publicClick = () => {
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove(".active");
    publicButton.classList.add("active");
  } else {
    publicButton.classList.add("active");
  }
};

if (location.pathname.indexOf("private") !== -1) {
  privateClick();
}

if (location.pathname.indexOf("group") !== -1) {
  publicClick();
}
