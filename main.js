const checkBoxes = document.querySelectorAll("input");
const divsContainer = document.querySelectorAll(".card__section__box__content");

checkBoxes[1].checked = true;
if (checkBoxes[1]) {
  divsContainer[1].setAttribute("display", "block");
}
