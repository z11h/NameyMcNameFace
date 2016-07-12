/*
 * Sorce Code for NameyMcNameFace
 * Written by Zakaria Ridouh
 * Started Developement: 7/10/16
 * Latest change date: 7/10/16
 * Latest version number: 0.0.1
 */

"use strict";

const PASS_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_!@#$*&^";

function setFName() {
  document.getElementById('FirstName').value = chance.first();
}

function setLName() {
  document.getElementById('LastName').value = chance.last();
}

function setPass() { // generates and sets password as well as password verification
  document.getElementById('Password').value = chance.string({
    length: chance.integer({
      min: 8,
      max: 15
    }),
    pool: PASS_POOL
  });
}

function setCountry() { // The MS sign up page takes area codes, we only want the BR supported country (US)
  document.getElementById('Country').value = "US";
}

function setGender() { // takes 'm' for male, 'f' for female, and 'u' for not specified
  switch (chance.gender()) {
    case 'Male':
      gender = 'm';
      break;
    case 'Female':
      gender = 'f';
      break;
    default: // todo: actually give this a chance to be
      gender = 'u';
  }
  document.getElementById('Gender').value = gender;
}

function setEmailOptin() { // so accounts' Outlook email is only BR offers, no junk
  document.getElementById('iOptinEmail').checked = false;
}

function setBirthMonth() { // generate a random parsed, trimed int for the month
  document.getElementById('BirthMonth').value = parseInt(chance.month({
    raw: true
  }).numeric.trim()); // todo: only get numeric, not whole object
}

function setBirthDay() { // generate a random unparsed day
  document.getElementById('BirthDay').value = chance.date().getDate();
}

function setBirthYear() { // generate a random unparsed year
  document.getElementById('BirthYear').value = chance.year({
    min: 1955,
    max: 1998
  });
}

function setPhoneCountry() {
  document.getElementById('PhoneCountry').value = "US"; // make sure its set to US
}

function setPhoneNumber() {
  document.getElementById('PhoneNumber').value = chance.phone({
    formatted: false,
    country: "us",
    mobile: true
  });
}

function nameyMcNameFace() { // not best function name
  setFName();
  setLName();
  setPass();
  setCountry();
  setGender();
  setEmailOptin();
  setBirthMonth();
  setBirthDay();
  setBirthYear();
  setPhoneCountry();
  setPhoneNumber();
}
// lol
nameyMcNameFace() // todo: make a page action for this
