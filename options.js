"use strict";

const optionsStatus = document.getElementById('optionsStatus');
const saveButton = document.getElementById('saveButton');

function updateStatus(message) {
  optionStatus.innerHTML = message;
};

function saveSettings() {
  updateStatus("Successfully saved settings!");
};

// attach event listeners
saveButton.addEventListener("click", saveSettings);
