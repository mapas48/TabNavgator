// Recuperar Html
const tabContainer = document.querySelector(".tabs-container");
const BtnContainer = document.querySelector(".button-nav-tabs");
const btns = document.querySelectorAll(".tabs-btn");
const tabs = document.querySelectorAll(".tabs-item");
// FUNCTION

function ChangeTab() {
    for (let item in tabs) {
        let items = tabs[item]
        items.hidden = true
    }
    }

    btns[0].addEventListener('click',()=>{
        ChangeTab();
        tabs[0].hidden = false;
        tabs[0].classList.add("animate-bouncing");
    });


btns[1].addEventListener('click',()=>{
    ChangeTab();
    tabs[1].hidden = false;
    tabs[1].style.display = "block";
    tabs[1].classList.add("animate-bouncing");
});

btns[2].addEventListener('click',()=>{
    ChangeTab();
    tabs[2].hidden = false;
    tabs[2].style.display = "block";
    tabs[2].classList.add("animate-bouncing");
});

btns[3].addEventListener('click',()=>{
    ChangeTab();
    tabs[3].hidden = false;
    tabs[3].style.display = "block";
    tabs[3].classList.add("animate-bouncing");
});


