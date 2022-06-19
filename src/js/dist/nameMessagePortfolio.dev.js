"use strict";

var message = document.querySelector(".user-name");

function wellcome() {
  var name = localStorage.getItem("Name");
  message.textContent = "Tutaj jest kilka zada\u0144 kt\xF3re robi\u0142em podczas kurus";
  setTimeout(function () {
    message.textContent = "po prawej treść zadania";
  }, 4000);
  setTimeout(function () {
    message.textContent = "po lewej kod do tego zadania";
  }, 8000);
  setTimeout(function () {
    message.textContent = "Na dole zaś już moje projekty ";
  }, 12000);
  setTimeout(function () {
    message.textContent = "Wiecej jest na moim GitHubie ";
  }, 16000);
  setTimeout(function () {
    message.textContent = "Link jest na dole lub w zakładce konatkt :) ";
  }, 20000);
}

wellcome();