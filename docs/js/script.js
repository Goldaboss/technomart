"use strict";

var bigMap = document.querySelector(".js-map");
bigMap.addEventListener("click", function (evt) {
  bigMap.classList.add("modal-show");
});
var buyItem = document.querySelector(".button-buy");
var itemAdded = document.querySelector(".modal-buy");
var writeUs = document.querySelector(".js-mail");
var sendMail = document.querySelector(".modal-mail");
var closeModal = document.querySelector(".exit-modal");
writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  sendMail.classList.add("modal-show");
});
buyItem.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemAdded.classList.add("modal-show");
});
closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  itemAdded.classList.remove("modal-show");
});
closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  sendMail.classList.remove("modal-show");
});