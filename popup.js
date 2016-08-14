"use strict";

const startNameyButton = document.getElementById('startNameyButton');
const resetNameyButton = document.getElementById('resetNameyButton');

const updateStatus = (() => {
    const popupStatus = document.getElementById('popupStatus');
    let statusClearTimeout;

    return (message) => {
        popupStatus.innerHTML = message;

        clearTimeout(statusClearTimeout);
        statusClearTimeout = setTimeout(() => {
            popupStatus.innerHTML = "";
        }, 2000);
    };
})();

function startNamey() {
  nameyMcNameFace();
  updateStatus("Successfully initialized Namey!");
};

function resetNamey() {
  updateStatus("Successfully reset Namey!");
};

startNameyButton.addEventListener("click", startNamey);
resetNameyButton.addEventListener("click", resetNamey);
