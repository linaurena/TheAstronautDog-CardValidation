/*--------------*/
/*POPUP ABOUT US*/
/*--------------*/

const btnOpenAboutUs = document.getElementById("li-about-us"),
overlayAboutUs = document.getElementById("overlay-about-us"),
popupAboutUs = document.getElementById("popup-about-us"),
btnCloseAboutUs = document.getElementById("btn-close-popup-about"),
btnLetsPlay = document.getElementById("lets-play-btn");

btnOpenAboutUs.addEventListener("click", function(){
  overlayAboutUs.classList.add("active");
  popupAboutUs.classList.add("active");
});

btnCloseAboutUs.addEventListener("click", function(){
  overlayAboutUs.classList.remove("active");
  popupAboutUs.classList.remove("active");
});

btnLetsPlay.addEventListener("click", function(){
    overlayAboutUs.classList.remove("active");
    popupAboutUs.classList.remove("active");
});

/*-------------*/
/*POPUP CONTACT*/
/*-------------*/

const btnOpenContact = document.getElementById("li-contact"),
overlayContact = document.getElementById("overlay-contact"),
popupContact = document.getElementById("popup-contact"),
btnCloseContact = document.getElementById("btn-close-popup-contact"),
btnOkContact = document.getElementById("ok-contact");

btnOpenContact.addEventListener("click", function(){
  overlayContact.classList.add("active");
  popupContact.classList.add("active");
});

btnCloseContact.addEventListener("click", function(){
  overlayContact.classList.remove("active");
  popupContact.classList.remove("active");
});

btnOkContact.addEventListener("click", function(){
    overlayContact.classList.remove("active");
    popupContact.classList.remove("active");
});

/*------------*/
/*POPUP REWARD*/
/*------------*/

const btnOpenReward = document.getElementById("dog-reward"),
overlayReward = document.getElementById("overlay-reward"),
popupReward = document.getElementById("popup-reward"),
btnCloseReward = document.getElementById("btn-close-popup-reward"),
btnAwesomeReward = document.getElementById("awesome-btn");

btnOpenReward.addEventListener("click", function(){
  overlayReward.classList.add("active");
  popupReward.classList.add("active");
});

btnCloseReward.addEventListener("click", function(){
  overlayReward.classList.remove("active");
  popupReward.classList.remove("active");
});

btnAwesomeReward.addEventListener("click", function(){
  overlayReward.classList.remove("active");
  popupReward.classList.remove("active");
});


/*----------*/
/*POPUP CART*/
/*----------*/

const openCartMain = document.getElementById("cart"),
cartMainOverlay = document.getElementById("cart-main-overlay"),
cartMainPopup = document.getElementById("cart-main-popup"),
btnCloseCart = document.getElementById("btn-close-popup-cart"),
btnPay = document.getElementById("pay-main");

openCartMain.addEventListener("click", function(){
  cartMainOverlay.classList.add("active");
  cartMainPopup.classList.add("active");
});

btnCloseCart.addEventListener("click", function(){
  cartMainOverlay.classList.remove("active");
  cartMainPopup.classList.remove("active");
});

/*
btnPay.addEventListener("click", function(){
  cartMainOverlay.classList.remove("active");
  cartMainPopup.classList.remove("active");
});

/*-------------*/
/*SECCIÓN GAMES*/
/*-------------*/

const menuGame = document.getElementById("choose-game"),
  openCrash = document.getElementById("crash-li"),
  openCallOfDuty = document.getElementById("call-li"),
  openLegendOfZelda = document.getElementById("legend-li"),
  crashSection = document.getElementById("crash-section"),
  callOfDutySection = document.getElementById("call-of-duty-section"),
  legendOfZeldaSection = document.getElementById("legend-of-zelda-section");

  window.addEventListener("load", function() {
    menuGame.classList.add("active");
});

openCrash.addEventListener("click", function(){
  crashSection.classList.add("active");
  callOfDutySection.classList.remove("active");
  legendOfZeldaSection.classList.remove("active");
});

openCallOfDuty.addEventListener("click", function(){
  crashSection.classList.remove("active");
  callOfDutySection.classList.add("active");
  legendOfZeldaSection.classList.remove("active");
});

openLegendOfZelda.addEventListener("click", function(){
  crashSection.classList.remove("active");
  callOfDutySection.classList.remove("active");
  legendOfZeldaSection.classList.add("active");
});


const btnOpenForm = document.getElementById("pay-main"),
  overlay = document.getElementById("overlay-main"),
  popup = document.getElementById("popup-main"),
  btnCloseForm = document.getElementById("btn-close-form-main");

btnOpenForm.addEventListener("click", function(){
    overlay.classList.add("active");
    popup.classList.add("active");
});

btnCloseForm.addEventListener("click", function(){
  overlay.classList.remove("active");
  popup.classList.remove("active");
});
