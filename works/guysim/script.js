"use strict";
//ARRAY SOM HÅLLER ALLA SKICKADE MEDDELANDEN.
let chat = [];
const audio = new Audio("sound/finklippljud1.mp3");
const videobg = document.querySelector(".parentFilm");

document.getElementById("film").addEventListener("ended", videoEnd, false);

function videoEnd(e) {
  film.style.opacity = 0;
  videobg.innerHTML = "";
  console.log("hej");
  myChat.style.opacity = 1;
  audio.play();
}

//HÄR LIGGER ALL KOD SOM KÖRS NÄR ETT MEDDELANDE SKA SKICKAS. VARJE MEDDELANDE
//HAR SIN EGEN FUNKTION!
const sendText = function () {
  let typeField = String(document.querySelector(".typeField").value);

  //INFO All text blir gemener, sedan tas "?" och "!" bort
  const typeFieldEdit = typeField
    .toLowerCase()
    .replaceAll("?", "")
    .replaceAll("!", "");

  if (
    // TYPES OF RIGHT ANSWERS
    typeFieldEdit === "hur är det"
  ) {
    // PUT OUTGOING MESSAGE IN A STRING
    chat.push(typeField);

    //OUTGOING MESSAGE SHOWING UP
    setTimeout(function () {
      document.querySelector(".outgoing").style.opacity = "1";
      document.querySelector(".outgoing").innerHTML = `<span>${chat[0]}</span>`;
    }, 150);

    //DISPLAYING TYPING SYMBOL
    setTimeout(function () {
      document.querySelector(".typingSymbol").style.opacity = "1";
    }, 1800);

    //REMOVING TYPING SYMBOL
    setTimeout(function () {
      document.querySelector(".typingSymbol").style.opacity = "0";
    }, 5000);

    //INCOMING MESSAGE SHOWING UP
    setTimeout(function () {
      document.querySelector(".recieving").style.opacity = "1";
    }, 5010);

    // SET MESSAGE INPUT FIELD TO EMPTY
    document.querySelector(".typeField").value = "";
  }
};

const sendText2 = function () {
  let typeField = String(document.querySelector(".typeField").value);

  const typeFieldLower = typeField.toLowerCase();

  if (
    // TYPES OF RIGHT ANSWERS
    typeFieldLower === "wanna talk tomorrow" ||
    typeFieldLower === "wanna talk tomorrow?" ||
    typeFieldLower === "talk tomorrow" ||
    typeFieldLower === "talk tomorrow?"
  ) {
    // PUT OUTGOING MESSAGE IN A STRING
    chat.push(typeField);

    //OUTGOING MESSAGE SHOWING UP
    setTimeout(function () {
      document.querySelector(".outgoing2").style.opacity = "1";
      document.querySelector(
        ".outgoing2"
      ).innerHTML = `<span>${chat[1]}</span>`;
    }, 150);

    //DISPLAYING TYPING SYMBOL
    setTimeout(function () {
      document.querySelector(".typingSymbol2").style.opacity = "1";
    }, 1800);

    //REMOVING TYPING SYMBOL
    setTimeout(function () {
      document.querySelector(".typingSymbol2").style.opacity = "0";
    }, 5000);

    //INCOMING MESSAGE SHOWING UP
    setTimeout(function () {
      document.querySelector(".recieving2").style.opacity = "1";
    }, 5010);

    // SET MESSAGE INPUT FIELD TO EMPTY
    document.querySelector(".typeField").value = "";
  }
};

//SKICKAR BASERAT PÅ CLICK PÅ SEND-KNAPPEN
document.querySelector(".send").addEventListener("click", function () {
  sendText();
  sendText2();
});

//SKICKAR BASERAT PÅ ENTER KEYBOARD INPUT (TYDLIGEN DEPRACATED, VILKET BETYDER
//ATT JAG BORDE UPPDATERA/FÖRNYA HUR DEN ÄR SKRIVEN)
document.onkeydown = function (evt) {
  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  if (keyCode == 13) {
    sendText();
    sendText2();
  }
};
