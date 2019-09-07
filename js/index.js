(function () {
  "use strict";
  var $contactForm = document.querySelector('.contact-form');
  var $contactShowButton = document.querySelector('.contacts-card__button');
  var $closeButton = document.querySelector('.contact-form__close');

  function hideShow(e) {
    e.preventDefault();
    $contactForm.classList.toggle('contact-form--hidden');
  }

  $contactShowButton.addEventListener('click', hideShow);
  $closeButton.addEventListener('click', hideShow);
})()
