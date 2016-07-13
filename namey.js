/*
 * Sorce Code for NameyMcNameFace
 * Written by Zakaria Ridouh
 * Started Developement: 7/10/16
 * Latest change date: 7/12/16
 * Latest version number: 0.0.2
 */

"use strict";

const PASS_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_!@#$*&^";
const GENDER_POOL = ["m", "f", "u"];

let singleGender;
let fullGender;

function generateGender() {
  singleGender = chance.pickone(GENDER_POOL);

  switch (singleGender) {
    case 'm':
      fullGender = "male";
      break;
    case 'f':
      fullGender = "female";
      break;
    default: // pick a random gender
      fullGender = chance.pickone(["male", "female"]);
      break;
  }
}

function setFName() {
  document.getElementById('FirstName').value = chance.first({
    gender: fullGender
  });
}

function setLName() {
  document.getElementById('LastName').value = chance.last({
      gender: fullGender
  });
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
  document.getElementById('Gender').value = singleGender;
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
    min: 1945,
    max: 1998
  });
}

function setPhoneCountry() {
  document.getElementById('PhoneCountry').value = "US"; // make sure its set to US
}

function setPhoneNumber() {
  document.getElementById('PhoneNumber').value = chance.phone({
    formatted: false,
    country: "us"
  });
}

function nameyMcNameFace() { // not best function name
  generateGender()
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
