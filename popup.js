"use strict";

const popupStatus = document.getElementById('popupStatus');
const startNameyButton = document.getElementById('startNameyButton');
const resetNameyButton = document.getElementById('resetNameyButton');

function updateStatus(message) {
  popupStatus.innerHTML = message;
};

function startNamey() {
  nameyMcNameFace();
  updateStatus("Successfully initialized Namey!");
};

function resetNamey() {
  updateStatus("Successfully reset Namey!");
};

startNameyButton.addEventListener("click", startNamey);
resetNameyButton.addEventListener("click", resetNamey);
