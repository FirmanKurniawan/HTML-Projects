"use strict";

const textAreaList = document.querySelectorAll("textarea");
const buttonsList = document.querySelectorAll(".btn");
const lengthItems = document.querySelectorAll(".heading");

const matched = (textArea) => {
  if (textArea.classList.contains("matched")) return;
  else if (textArea.classList.contains("un-matched")) {
    textArea.classList.remove("un-matched");
    textArea.classList.add("matched");
  } else {
    textArea.classList.add("matched");
  }
};

const unMatched = (textArea) => {
  if (textArea.classList.contains("un-matched")) return;
  else if (textArea.classList.contains("matched")) {
    textArea.classList.remove("matched");
    textArea.classList.add("un-matched");
  } else {
    textArea.classList.add("un-matched");
  }
};

const onclick = (index) => {
  const textFromWindow1 = textAreaList[index].value;
  const textFromWindow2 = textAreaList[index + 1].value;
  lengthItems[index].textContent = `Length: ${textFromWindow1.length}`;
  lengthItems[index + 1].textContent = `Length: ${textFromWindow2.length}`;
  if (textFromWindow1 === textFromWindow2) {
    matched(textAreaList[index]);
    matched(textAreaList[index + 1]);
  } else {
    unMatched(textAreaList[index]);
    unMatched(textAreaList[index + 1]);
  }
};

buttonsList.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn--1")) {
      onclick(0);
    } else {
      onclick(2);
    }
  });
});
