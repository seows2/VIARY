const privateButton = document.querySelector(".private");

const privateClick = (event) => {
  console.log(event);
};

const activeInit = () => {
  privateButton.addEventListener("click", privateClick);
};

if (privateButton) {
  activeInit();
}
