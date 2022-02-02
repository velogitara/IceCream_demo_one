(() => {
  const menuBtnRef = document.querySelector("[data-menu-pink]");
    const mobileMenuRef = document.querySelector("[data-menu-yellow]");
    const btnReadGreen = document.querySelector("[data-menu-green]");
  
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
            menuBtnRef.classList.toggle("is-close-one");
    
        // menuBtnRef.setAttribute("aria-expanded", !expanded);
             });
        mobileMenuRef.addEventListener("click", () => {
            const expanded =
                //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
                mobileMenuRef.classList.toggle("is-close-two");
        });
    
    btnReadGreen.addEventListener("click", () => {
        const expanded =
            //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
            btnReadGreen.classList.toggle("is-close-three");
    
        // menuBtnRef.setAttribute("aria-expanded", !expanded);
             });
    })();