'use strict';

(function () {
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var paint = function (coat, eyes, fire) {
    coat.addEventListener('click', function () {
      coat.style.fill = window.getRandomArrayElement(coatColor);
    });
    eyes.addEventListener('click', function () {
      eyes.style.fill = window.getRandomArrayElement(eyesColor);
    });
    fire.addEventListener('click', function () {
      fire.style.backgroundColor = window.getRandomArrayElement(fireballColor);
    });
  };

  paint(wizardCoat, wizardEyes, fireball);

})();
