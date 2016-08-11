"use strict";

const optionsStatus = document.getElementById('optionsStatus');
const saveButton = document.getElementById('saveButton');

function updateStatus(message) {
  optionsStatus.innerHTML = "<br />" + message;
};

function clearStatus() {
  optionsStatus.innerHTML = '';
};

function saveSettings() {
  let nameNationality = document.getElementById('nationalityOption').value;
  let passPool = document.getElementById('passPoolInput').value;

  chrome.storage.sync.set({
    'nationality': nameNationality,
    'passPool': passPool
  }, () => {
    updateStatus()("Successfully saved settings!");
  })

  setTimeout(() => {
    clearStatus()
  }, 5000)
};

// attach event listeners
saveButton.addEventListener("click", saveSettings);
