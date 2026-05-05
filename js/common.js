document.addEventListener("DOMContentLoaded", ()=>{
    const hamBox = document.querySelector(".ham_box");
    const moGnb = document.querySelector(".mo_gnb");

    hamBox.addEventListener("click", ()=>{
        moGnb.classList.toggle("active");
    });
});