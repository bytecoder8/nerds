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

  // slider
  var $sliderButtons = document.querySelectorAll('.slider__button');

  for (var i = 0; i < $sliderButtons.length; i++) {
    $sliderButtons[i].addEventListener('click', function (e) {
      var num = e.currentTarget.dataset.slider;

      hideElements('.slider__element', 'slider__element--hidden');
      hideElements('.slider__card', 'slider__card--hidden');

      document.querySelector('.slider__element[data-slider="'+num+'"]').classList.remove('slider__element--hidden');
      document.querySelector('.slider__card[data-slider="'+num+'"]').classList.remove('slider__card--hidden');
    });
  }

  function hideElements(selector, cls) {
    var $elements = document.querySelectorAll(selector);
    for (var i = 0; i < $elements.length; i++) {
      $elements[i].classList.add(cls);
    }
  }
  function showElements(selector, cls) {
    var $elements = document.querySelectorAll(selector);
    for (var i = 0; i < $elements.length; i++) {
      $elements[i].classList.remove(cls);
    }
  }
})()
