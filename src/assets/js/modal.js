const login = document.querySelector(".login");
const join = document.querySelector(".join");
const closeBtn = document.querySelectorAll(".modal__close");
const modalLayout = document.querySelectorAll(".modal__overlay");

const loginClick = () => {
  const loginModal = document.querySelector(".login__modal__container");
  loginModal.classList.remove("hidden");
};
const joinClick = () => {
  const joinModal = document.querySelector(".join__modal__container");
  joinModal.classList.remove("hidden");
};
const closeModal = (event) => {
  const {
    parentNode: {
      parentNode: { classList },
    },
  } = event.target;
  classList.add("hidden");
};
const closeModalback = (event) => {
  const {
    parentNode: { classList },
  } = event.target;
  classList.add("hidden");
};

function modalInit() {
  login.addEventListener("click", loginClick);
  join.addEventListener("click", joinClick);
  closeBtn.forEach((e) => {
    e.addEventListener("click", closeModal);
  });
  modalLayout.forEach((e) => {
    e.addEventListener("click", closeModalback);
  });
}

if (login && join && closeBtn && modalLayout) {
  modalInit();
}
