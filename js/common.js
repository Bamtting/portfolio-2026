document.addEventListener("DOMContentLoaded", ()=>{
    const introMain = document.querySelector(".intro");
    const introStart = document.querySelector(".intro_btn");
    
    introStart.addEventListener("click", ()=>{
        introMain.style.display = "none";
    });
});