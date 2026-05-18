document.addEventListener("DOMContentLoaded", ()=>{
    const hamBox = document.querySelector(".ham_box");
    const moGnb = document.querySelector(".mo_gnb");

    hamBox.addEventListener("click", ()=>{
        moGnb.classList.toggle("active");
    });
    const openBtn = document.querySelectorAll(".project .pop_open");
    const closeBtn = document.querySelectorAll(".project .close_btn");
    const popUpItem = document.querySelectorAll(".project .pop");
    openBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            popUpItem[index].classList.add("active");
        });
    });
    closeBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            popUpItem[index].classList.remove("active");
        });
    });
});