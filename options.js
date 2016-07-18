"use strict";

let status = document.getElementById('status');

function updateStatus(message) { //updates the status with a provided string.
  status.innerHTML = message;
  swal(
    'Yay!',
    'Successfully saved settings!',
    'success'
  )
}

function saveSettings() {
  // save the options to local storage
  updateStatus("Successfully saved settings!");
};

// attach event listeners
document.getElementById('saveButton').addEventListener("click", saveSettings);
