(() => {
  const refs = {
      openModalBtn: document.querySelector('[data-buy-open]'),
      openBtn: document.querySelector('[data-now-open]'),
    closeModalBtn: document.querySelector('[data-buy-close]'),
    modal: document.querySelector('[data-buy]'),
  };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();