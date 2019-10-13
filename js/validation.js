'use strict';

(function () {
  var userNameField = document.querySelector('.setup-user-name');

  userNameField.addEventListener('invalid', function () {
    if (userNameField.validity.tooShort) {
      userNameField.setCustomValidity('Минимум 2 символа!!!');
    } else if (userNameField.validity.tooLong) {
      userNameField.setCustomValidity('Не больше 25 символов!!!');
    } else if (userNameField.validity.valueMissing) {
      userNameField.setCustomValidity('Нужно указать имя!!!');
    } else {
      userNameField.setCustomValidity('');
    }
  });

})();
