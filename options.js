"use strict";

let status = document.getElementById('status');

function updateStatus(message) {
  swal(
    'Woot!',
    message,
    'success'
  )
}

function saveSettings() {
  // save the options to local storage
  updateStatus("Successfully saved settings!");
};

// attach event listeners
document.getElementById('saveButton').addEventListener("click", saveSettings);
