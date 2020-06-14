const privateButton = document.querySelector(".private");

const privateClick = () => {
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove(".active");
    privateButton.classList.add("active");
  } else {
    privateButton.classList.add("active");
  }
};

if (location.pathname.indexOf("group") !== -1) {
  privateClick();
}
