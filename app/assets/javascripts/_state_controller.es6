var stateManipulators = document.querySelectorAll('.js-state-manipulator');
var stateControllers  = document.querySelectorAll('.js-state-controller');

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// const states = [
//   "is-loading",
//   "is-locked",
//   "is-unlocked",
//   "is-neutral"
// ];

var manipulate = function(manipulator) {

  manipulator.getData = function () {
    this.state =  this.getAttribute('data-set-state');
    this.target = this.getAttribute('data-state-manipulator');
  };

  manipulator.setData = function () {
    this.closest('.js-state-controller').classList.remove("is-loading", "is-locked", "is-unlocked", "is-neutral");
    this.closest('.js-state-controller').classList.add(manipulator.state);
  };

  manipulator.init = function() {
    this.addEventListener('click', () => { manipulator.getData(manipulator) }, false);
    this.addEventListener('click', () => { manipulator.setData(manipulator) }, false);
  };

  manipulator.init();
};

forEach(stateManipulators, function (index, manipulator) {
    manipulate(manipulator);
});
